import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

export const addScore=async (score)=>{
  //  e.preventDefault()
    try {
        const docRef = await addDoc(collection(db, "scoreList",props.title,"scores"), 
          {...score});
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function getScores(puzzleTitle) {
    // const scoresCol=
    console.log(puzzleTitle);
  let scoreSnapshot= await getDocs(collection(db,'scoreList',puzzleTitle,'scores'))
//    .then((scoreSnapshot)=>{
//        const scoreList=scoreSnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
//        //setScores(scoreList)
//         console.log(scoreList)
//         return scoreList ?? null;
//    })
return scoreSnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
}