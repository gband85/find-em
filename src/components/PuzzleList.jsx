import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getPuzzles } from './puzzles';

export async function puzzleListLoader() {
  const puzzles = await getPuzzles();
  return { puzzles };
}

const PuzzleList = () => {
   useEffect(()=>{
    // console.log(globalState);
   })
 const puzzles=useLoaderData()
   return (
     <div className="columns" id='puzzle-list'>
       {puzzles.map((puzzle) => {
         return (
           <div className="column" key={uuid()}>
             <Link
               className="puzzle-lin"
               to={`/puzzles/${puzzle.title}`}
             >
               <div className='card grow'>
                 {/* <h1>{puzzle.title}</h1> */}
                 <div className="card-image ">

                 <img src={puzzle.source} className='image'/>

                 </div>
               </div>
             </Link>
           </div>
         );
       })}
     </div>
   );
}

export default PuzzleList