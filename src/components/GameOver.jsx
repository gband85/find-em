
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