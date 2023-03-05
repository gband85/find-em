import React, { useEffect, useState } from 'react'

const GameTimer = (props) => {
    const [timeElapsed,setTimeElapsed] = useState(0)
    const [minutes,setMinutes]=useState(Math.floor(0))
    const [seconds,setSeconds]=useState(0)

    
   
    
    useEffect(()=>{
      let timer=()=>
      {
       
        setTimeElapsed(timeElapsed+1000)
        props.setTimeElapsed(timeElapsed)
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
  
  
                  <h1 id="time-left">{(minutes<10 ? "0" + minutes : minutes)+":"+(seconds<10 ? "0"+seconds:seconds)}</h1>
                 
      
             
          </div>
  )
}

export default GameTimer