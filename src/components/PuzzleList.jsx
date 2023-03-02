import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { getPuzzles } from './puzzles';

export async function puzzleListLoader() {
  //await resetPuzzles();
  const puzzles = await getPuzzles();
  console.log({ puzzles });
  return { puzzles };
}

const PuzzleList = () => {
   // const {puzzles} = useContext(store).state;
   const { puzzles } = useLoaderData();
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
               to={`/puzzles/${puzzle.title}`}
               
             >
               <div style={{ border: "1px solid red" }}>
                 <h1>{puzzle.title}</h1>
                 <img src={puzzle.source} />
               </div>
             </Link>
           </>
         );
       })}
     </div>
   );
}

export default PuzzleList