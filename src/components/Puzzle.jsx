import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import GameTimer from './GameTimer';
import { Charbox, Overlay } from './Layout';
import { getPuzzle } from './puzzles';


export async function puzzleLoader({ params }) {
 // console.log(params);
  const puzzle=await getPuzzle(params.puzzleTitle)
 console.log(puzzle);
  
  return puzzle;
}

const Puzzle = () => {
  let puzzle=useLoaderData();
  const [overlayDisplay, setOverlayDisplay] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeElapsed,setTimeElapsed] = useState(0)
  const [boxStyle, setBoxStyle] = useState({
    left: "",
    top: "",
    display: "none",
  });
  const [selection, setSelection] = useState();
const  handleClick=()=>{

}
 // console.log(puzzle);
  return (
    <>
      
      <div className="puzzle">
      gameOver ?  <Overlay overlayDisplay={overlayDisplay} /> : null

        
        <div className="puzzle-header">
          <h1>{puzzle.title}</h1>
          <button className="reset" onClick={handleClick} type="button">Reset</button>
          <GameTimer gameOver={gameOver} setTimeElapsed={setTimeElapsed}/>
        </div>
        <div
          className="game-over"
          style={gameOver ? { display: "flex" } : { display: "none" }}
        >
          <h1>Congratulations! You finished in {timeElapsed}</h1>
          <button className="reset"
            onClick={handleClick}
            type="button"
          >
            Try Again
          </button>
        </div>
        <div className="puzzle-body">
          <img
            src={puzzle.source}
            className="image"
            onClick={handleClick}
          />

          {puzzle.chars.map((char) => {
            return (
              <Charbox
                key={char.name}
                char={char}/>
            );
          })}

          <div
            className="find-list"
            style={{
              left: `${boxStyle.left}`,
              top: `${boxStyle.top}`,
              display: boxStyle.display,
            }}
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
        </div>
      </div>
    </>
  )
}

export default Puzzle