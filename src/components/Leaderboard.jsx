import React, { useEffect, useState } from 'react'
import { collection, addDoc,getDocs } from "firebase/firestore";
import {db} from './firebase-config';
// Initialize Firebase
   
function Leaderboard(scores) {
    const [scores,setScores]=useState([])
const [score,setScore]=useState({
    Name: "",
Time: ""
})

// Initialize Cloud Firestore and get a reference to the service
const addScore=async (e)=>{
  //  e.preventDefault()
    try {
        const docRef = await addDoc(collection(db, "scores"), {
          ...score
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

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

//   if (!scores)
  getScores()
//   console.log(scores);
// return () => {
//     // this now gets called when the component unmounts
//   };
},[])
  return (
    <>
    <div></div>
    <div>
    {
        scores.map((score,i)=>(
        <h1 key={i}>
        {score.Name}
        </h1>
        ))
    }

    </table>
   </> 
  )
}

export default Leaderboard