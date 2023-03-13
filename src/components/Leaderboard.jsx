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

   const getScores = async () => {
  // const scoresCol=
 await getDocs(collection(db,'scores'))
 .then((scoreSnapshot)=>{
     const scoreList=scoreSnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
     setScores(scoreList)
      console.log(scores)
 })
   
  
  


  // return scoreList;
}

useEffect(()=>{

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

    </div>
   </> 
  )
}

export default Leaderboard