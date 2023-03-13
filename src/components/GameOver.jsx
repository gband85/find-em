
const GameOver=({timeDisplay,handleClick}) =>{
    return <div
      className="game-over">
      <h1>Congratulations! You finished in {timeDisplay}</h1>
      <input type="text" placeholder='Name' onChange={(e)=>setScore({Name: e.target.value,Time:"00:11:32"})}/>
    <button type='submit' onClick={()=>addScore(score)}>Add Score</button>
      <button id="reset" className="button is-primary"
        onClick={handleClick}
        type="button"
      >
        Try Again
      </button>
    </div>;
  }
  export default GameOver;