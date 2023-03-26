import { useState } from "react";

import { collection, addDoc,getDocs } from "firebase/firestore";
import {db} from './firebase-config';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addScore } from "./firebase";
const GameOver=(props) =>{
  const navigate = useNavigate();
    const [score,setScore]=useState({
    Name: "",
    Time: props.timeDisplay
})

const handleSubmit=(e)=>{
  console.log(score);
e.preventDefault()
    addScore(score)
    //props.setGameOver(false)
  //  props.reset()
    navigate(`/leaderboard/${props.title}`)
}
const handleChange=(e)=>{
  setScore({...score,[e.target.name]:e.target.value})
}
    return (<div
      className="game-over">
      <h1>Congratulations! You finished in {props.timeDisplay}</h1>
      <form onSubmit={handleSubmit} className="is-flex">

      <input required placeholder='Name' name="Name" value={score.Name} onChange={handleChange}/>
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