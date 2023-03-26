import React, { useEffect, useState } from 'react'
import { redirect, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import GameTimer from './GameTimer';
import  Charbox  from "./Charbox";
import { getPuzzle, resetPuzzle, updateChar } from './puzzles';
import GameOver from './GameOver';


export async function puzzleLoader({ params }) {
 // console.log(params);
  const puzzle=await getPuzzle(params.puzzleTitle)
//  console.log(puzzle);
  
  return puzzle;
}

async function findChar(params) {
 await updateChar(params.title, params.char);
}
async function reset(params) {
await resetPuzzle(params)
}

  const data=useRouteLoaderData('root')
 // console.log(data);
  const puzzleData=useLoaderData()
  const navigate = useNavigate();
  const [puzzle,setPuzzle]=useState(puzzleData);
  // use state instead of trying to reload data from loader 
  //data will be updated after state is set
  const [gameOver,setGameOver]=useState(false)
  const [overlayDisplay, setOverlayDisplay] = useState(false);
  const [boxStyle, setBoxStyle] = useState({
    left: "",
    top: "",
    display: "none",
  });
  const [selection, setSelection] = useState();
  const [gameOver,setGameOver]=useState(false)
  const [timeDisplay,setTimeDisplay] = useState("00:00:00")
  const [isRunning,setIsRunning] = useState(true)
  useEffect(()=>{
    reset(puzzle.title)
    let newchars2 = puzzle.chars.map((char) => {

      return { ...char, found: false }
    });
    setPuzzle({ ...puzzle, chars: newchars2 });
    setGameOver(false)
    setIsRunning(true)
  },[])
    //Check on every render if all characters are found
    useEffect(()=>{
      if (puzzle.chars.every(char=>char.found===true)){
       setGameOver(true)
       setIsRunning(false)
      }
    },[puzzle.chars,setGameOver,setIsRunning])
  const openContextMenu=(e)=>{
    setBoxStyle({
      ...boxStyle,
      left: `${(e.pageX / e.target.width) * 100}%`,
      top: `${((e.pageY-90) / e.target.height) * 100}%`,
      display: "block",
    });
  }
  const closeContextMenu=()=>{
      setBoxStyle({left: "", top: "", display: "none" });
  }
  //check if clicked location is a character
  function checkForChar(e) {
    function isAChar(element) {
      console.log(element);
      console.log(e.pageX / e.target.width*100);
  //is clicked location within a character's bounding box?
      if (
        ((e.pageX / e.target.width) * 100) >= element.x1 &&
        ((e.pageX / e.target.width) * 100) <= element.x2 &&
        (((e.pageY - 98) / e.target.height) * 100) >= element.y1 &&
        (((e.pageY - 98) / e.target.height) * 100) <= element.y2
      ) {
        console.log(element.name);
        return element;
      }
    }
    if (puzzle.chars.find(isAChar)) {
      //if so, set selection to character whose bounding box the clicked location is in
      setSelection(puzzle.chars.find(isAChar).name);
    } else {
      setSelection(undefined);
    }
  }
const  handleClick=(e)=>{
 //  handle clicking on character name button
 if (e.target.matches(".char button"))

 {
//Hide character list
closeContextMenu()
 console.log(e);
 if (e.target.dataset["name"] === selection) {
   //console.log(submit);
   let newchars = puzzle.chars.map((char) => {
     if (char.name === selection) {
       return { ...char, found: true };
     }
     return char;
   });
   console.log("found" + selection);
   
   setPuzzle({ ...puzzle, chars: newchars });
   findChar({ title: puzzle.title, char: selection });

 } else {
   console.log("try again!");
 }
 setSelection(undefined);

 }
 else if (e.target.matches(".image"))
 {
     console.log(e);
checkForChar(e)
openContextMenu(e)
 }
 else if (e.target.matches('#reset')) {

   let newchars2 = puzzle.chars.map((char) => {

     return { ...char, found: false }
   });
   setPuzzle({ ...puzzle, chars: newchars2 });
   //ref.current.startTimer();
   reset(puzzle.title)
    setGameOver(false)
 }
}
 // console.log(puzzle);
  return (
    <>
      
      <div className="puzzle">
      {gameOver ?  <div className="overlay"></div> : null}

        {
      gameOver ? <GameOver handleClick={handleClick} title={puzzle.title} timeDisplay={timeDisplay} setGameOver={setGameOver} reset={()=>reset(puzzle.title)}/> : null}
        {/* <div className="puzzle-body"> */}
        <GameTimer  isRunning={isRunning}
                                    gameOver={gameOver}
                  setTimeDisplay={setTimeDisplay}
                  timeDisplay={timeDisplay}
                />
          <img
          
            src={puzzle.source}
            className="image"
            onClick={handleClick}
          />

          {puzzle.chars.map((char) => {
            if (char.found === true ) { 
            return (
                <Charbox
                key={char.name}
                char={char}/>   )}  
                else
                return null            
          })}

          <div
            className="find-list"
            style={boxStyle}
          >
            <ul>
              {puzzle.chars.map((char) => {
                let disabled;
                if (char.found) {
                  disabled = true;
                }
                return (
                  <li className="char" key={char.name}>
                    <button
                      data-name={char.name}
                      type="submit"
                      disabled={disabled}
                      onClick={handleClick}
                    >
                      {char.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        {/* </div> */}
      </div>
    </>
  )
}

export default Puzzle;