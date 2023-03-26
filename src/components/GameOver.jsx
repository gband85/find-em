
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
      className="game-over">
      <form onSubmit={handleSubmit} className="is-flex">

      <input required placeholder='Name' name="Name" value={score.Name} onChange={handleChange}/>
    <button type="submit" className="button is-primary" >Add Score</button>
    </form>
      <button id="reset" className="button is-primary"
        onClick={handleClick}
        type="button"
      >
        Try Again
      </button>
    </div>;
  }
  export default GameOver;