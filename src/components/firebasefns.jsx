import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { db } from "./firebase-config";
//import { getAuth, signInAnonymously } from "firebase/auth";




export const addScore=async (score,props)=>{
  //  e.preventDefault()
// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());


    try {
        const docRef = await addDoc(firestore.collection(db, "scoreList",props.title,"scores"), 
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
        const scoreList=scoreSnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
//        //setScores(scoreList)
         console.log(scoreList)
//         return scoreList ?? null;
//    })
return scoreSnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})).sort((a,b)=>{
  if (a.Time<b.Time)
  return -1
  if (a.Time>b.Time)
  return 1
  return 0
})
}