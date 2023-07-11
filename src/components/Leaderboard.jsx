import React, { useEffect, useState } from 'react'
import { collection, addDoc,getDocs } from "firebase/firestore";
//import {db} from './firebase-config';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import { getScores } from './firebasefns';
// Initialize Firebase
function Leaderboard() {
const {scores,puzzle}=useLoaderData()

 return (
    <>
      <h2 className='title'>{puzzle.title}</h2>
    <table className='table is-fullwidth is-narrow is-bordered is-striped'>
    
      <thead>
         <tr>
            {/* <th>Place</th> */}
            <th>Name</th>
            <th>Time</th>
         </tr>
      </thead>
      <tbody>
         
              { scores ?  scores.map((score)=>(
               <tr>
        <td key={score.id}>
        {score.Name}
        </td>
        <td >
       {score.Time}
        </td>
        </tr>
        )):null
    }    
         
      </tbody>


    </table>
   </> 
  )
}

export default Leaderboard;