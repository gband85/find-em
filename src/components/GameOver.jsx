import { useEffect, useRef, useState } from "react";
import { db } from './firebase-config';
import { useNavigate } from "react-router-dom";
import { addScore } from "./firebasefns";
import '../css/GameOver.css'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from '@firebase/auth';
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const GameOver = (props) => {
  const [userData, setUserData] = useState({})

  const ref = useRef()
  const navigate = useNavigate();
  const [score, setScore] = useState({
    Name: "",
    Time: props.timeDisplay
  })

  const handleSubmit = (e) => {
    console.log(score);
    e.preventDefault()
    addScore({ ...score, Name: userData.displayName }, props)
    props.setGameOver(false)
    props.reset()
    navigate(`/leaderboard/${props.title}`)
  }
  return (<div
    className="game-over">
    <h1>Congratulations! You finished in {props.timeDisplay}</h1>
    <p>{userData.displayName}</p>
    <form onSubmit={handleSubmit} className="is-flex">

      {userData.displayName ? <button type="submit" className="button is-primary" >Add Score</button> : <button type="submit" disabled className="button is-primary" >Add Score</button>}
    </form>
    <button id="reset" className="button is-primary"
      onClick={props.handleClick}
      type="button"
    >
      Exit
    </button>
    <GoogleLoginButton
      onClick={async () => {
        let user = await signInWithPopup(getAuth(), new GoogleAuthProvider())
        console.log(user.user)

        setUserData({ ...user.user, displayName: `${user.user.email.split('@')[0]}` })

      }}
    />
    <GithubLoginButton
      onClick={async () => {
        let user = await signInWithPopup(getAuth(), new GithubAuthProvider())
        console.log(user.user)
          setUserData({ ...user.user, displayName: `${user.user.email.split('@')[0]}` })

      }}
    />
  </div>)
}
export default GameOver;