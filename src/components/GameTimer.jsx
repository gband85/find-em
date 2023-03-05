import React, { useEffect, useState } from 'react'

const GameTimer = (props) => {
    const [timeElapsed,setTimeElapsed] = useState(0)
    const [hours,setHours]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [seconds,setSeconds]=useState(0)

    const time_left=(
      <h1 id="time-left">{(hours<10 ? "0" + hours : hours)+ ":" +(minutes<10 ? "0" + minutes : minutes)+":"+(seconds<10 ? "0"+seconds:seconds)}</h1>)
   
    
    useEffect(()=>{
      let timer=()=>
      {
       
        setTimeElapsed(timeElapsed+1000)
        setHours(Math.floor(timeElapsed/1000/60/60%24))
         setMinutes(Math.floor(timeElapsed / 1000 / 60))
             setSeconds(timeElapsed/1000%60)
     props.setTimeDisplay(time_left)
   }
      let  tick;
      if (props.gameOver) {
       
           clearInterval(tick)
} 
      
else {
   tick  = setInterval(timer,1000)
}
return ()=>  clearInterval(tick)


    })
  
  return (
  <div id="clock">
  
  {time_left}
                 
      
             
          </div>
  )
}

export default GameTimer