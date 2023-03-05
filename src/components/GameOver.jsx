const GameOver=({timeDisplay,handleClick}) =>{
    return <div
      className="game-over">
      <h1>Congratulations! You finished in {timeDisplay}</h1>
      <button className="reset"
        onClick={handleClick}
        type="button"
      >
        Try Again
      </button>
    </div>;
  }
  export default GameOver;