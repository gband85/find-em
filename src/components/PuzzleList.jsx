import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getPuzzles } from './puzzles';

export async function puzzleListLoader() {
  const puzzles = await getPuzzles();
  return { puzzles };
}

const PuzzleList = ({puzzles,setCurrentPuzzle,setShowClock}) => {
   useEffect(()=>{
    // console.log(globalState);
   })
 
   return (
     <div className="puzzles">
       {puzzles.map((puzzle) => {
         return (
           <>
             <Link
               className="puzzle-link"
               to={"/puzzle"}
               onClick={()=>{
                setCurrentPuzzle(puzzle)
                setShowClock(true)
               }}
             >
               {/* <div style={{ border: "1px solid red" }}> */}
                 <h1>{puzzle.title}</h1>
                 <img src={puzzle.source} />
               {/* </div> */}
             </Link>
           </>
         );
       })}
     </div>
   );
}

export default PuzzleList