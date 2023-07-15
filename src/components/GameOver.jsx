import { useEffect, useRef,useState } from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import {db} from './firebase-config';
import { useNavigate } from "react-router-dom";
import { addScore } from "./firebasefns";
import '../css/GameOver.css'
import SignInScreen from "./SignInScreen";

const GameOver=(props) =>{
  const [googleUser,setGoogleUser]=useState({})
 // var ui = new firebaseui.auth.AuthUI(firebase.auth());
 const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    //firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],

};


 useEffect(()=>{
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
  ui.start(document.querySelector("#firebaseui-auth-container"), uiConfig);
})
const ref=useRef()
  const navigate = useNavigate();
    const [score,setScore]=useState({
    Name: "",
    Time: props.timeDisplay
})



      // Initialize the FirebaseUI Widget using Firebase.
//      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
  //    ui.start(document.querySelector("#firebaseui-auth-container"), uiConfig);

const handleSubmit=(e)=>{
  console.log(score);
e.preventDefault()
    addScore(score,props)
    //props.setGameOver(false)
  //  props.reset()
    navigate(`/leaderboard/${props.title}`)
}
    return (<div
      className="game-over">
      <h1>Congratulations! You finished in {props.timeDisplay}</h1>
      <SignInScreen setGoogleUser={setGoogleUser}/>
<div id="loader">Loading...</div>
{/* <button onClick={()=>ui.start(document.querySelector('#firebaseui-auth-container'), uiConfig)}>Sign in</button> */}
      <form onSubmit={handleSubmit} className="is-flex">

    <button type="submit" className="button is-primary" >Add Score</button>
    </form>
      <button id="reset" className="button is-primary"
        onClick={props.handleClick}
        type="button"
      >
        Exit
      </button>
    </div>)
  }
  export default GameOver;