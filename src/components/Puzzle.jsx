import React from 'react'
import { getPuzzle } from './puzzles';

export async function puzzleLoader({ params }) {
  console.log(params);
  return getPuzzle(params.puzzleTitle);
}

const Puzzle = () => {
  return (
    <>
      {" "}
      <div className="puzzle">
      gameOver ?  <Overlay overlayDisplay={overlayDisplay} /> : null

        
        <div className="puzzle-header">
          <h1>{puzzle.title}</h1>
          <button className="reset" onClick={handleClick} type="button">Reset</button>
          <GameTimer gameOver={gameOver} setTimeElapsed={setTimeElapsed}/>
        </div>
        <div
          className="game-over"
          style={gameOver ? { display: "flex" } : { display: "none" }}
        >
          <h1>Congratulations! You finished in {timeElapsed}</h1>
          <button className="reset"
            onClick={handleClick}
            type="button"
          >
            Try Again
          </button>
        </div>
        <div className="puzzle-body">
          <img
            src={puzzle.source}
            className="image"
            onClick={handleClick}
          />

          {puzzle.chars.map((char) => {
            return (
              <CharBox
                key={char.name}
                char={char}/>
            );
          })}

          <div
            className="find-list"
            style={{
              left: `${boxStyle.left}`,
              top: `${boxStyle.top}`,
              display: boxStyle.display,
            }}
          >
            <ul>
              {puzzle.chars.map((char) => {
                let disabled;
                if (char.found) {
                  disabled = true;
                }
                return (
                  <li className="char" key={char.name}>
                    <button
                      data-name={char.name}
                      type="submit"
                      disabled={disabled}
                      onClick={handleClick}
                    >
                      {char.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Puzzle