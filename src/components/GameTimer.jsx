import React, { useEffect, useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import { useInterval } from './useInterval'

const GameTimer = (props) => {
    const [timeElapsed,setTimeElapsed] = useState(0)
    const [hours,setHours]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [seconds,setSeconds]=useState(0)
const [timeDisplay, setTimeDisplay] = useState("00:00:00")

    const time_left=(
      (hours<10 ? "0" + hours : hours)+ ":" +(minutes<10 ? "0" + minutes : minutes)+":"+(seconds<10 ? "0"+seconds:seconds))
      useInterval(()=>
      {
       
        setTimeElapsed(timeElapsed+1000)
        setHours(Math.floor(timeElapsed/1000/60/60%24))
         setMinutes(Math.floor(timeElapsed / 1000 / 60 % 60))
             setSeconds(timeElapsed/1000%60)
             props.setTimeDisplay(time_left)
   },props.isRunning?1000:null)
    

      let  tick;
      if (!props.gameOver) {}
  
  return (

  <h1 className='is-size-4-mobile is-size-4-touch is-size-3-desktop' id="time-left">
  {props.timeDisplay}</h1>
                 
      
             

  )
}

export default GameTimer