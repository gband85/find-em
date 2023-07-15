import { useEffect, useRef,useState } from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {db} from './firebase-config';
import { useNavigate } from "react-router-dom";
import { addScore } from "./firebasefns";
import '../css/GameOver.css'
import SignInScreen from "./SignInScreen";

const GameOver=(props) =>{
  const [googleUser,setGoogleUser]=useState({})

const ref=useRef()
  const navigate = useNavigate();
    const [score,setScore]=useState({
    Name: "",
    Time: props.timeDisplay
})

const handleSubmit=(e)=>{
  console.log(score);
e.preventDefault()
addScore({...score,Name:googleUser.displayName},props)
    //props.setGameOver(false)
  //  props.reset()
    navigate(`/leaderboard/${props.title}`)
}
    return (<div
      className="game-over">
      <h1>Congratulations! You finished in {props.timeDisplay}</h1>
      <p>{googleUser.displayName}</p> 
      <SignInScreen setGoogleUser={setGoogleUser}/>
<div id="loader">Loading...</div>
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