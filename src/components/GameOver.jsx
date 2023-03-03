const GameOver=({timeElapsed,handleClick}) =>{
    return <div
      className="game-over">
      <h1>Congratulations! You finished in {timeElapsed}</h1>
      <button className="reset"
        onClick={handleClick}
        type="button"
      >
        Try Again
      </button>
    </div>;
  }
  export default GameOver;