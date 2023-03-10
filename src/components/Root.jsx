import { Outlet, Link } from "react-router-dom";
import GameTimer from "./GameTimer";

const Root = (props) => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__brand">
          <Link to="/" onClick={()=>setPuzzle("")}>
            Find 'Em
          </Link>
        </h1>
        {props.puzzle ? <ul className="char-names">
          {props.puzzle.chars.map(char=>{
            return (
              <h4>{char.name}</h4>
            )
          })}
        </ul> : null}
      {props.showClock ? <GameTimer gameOver={props.gameOver} setTimeDisplay={props.setTimeDisplay}/> : 
        (<nav className="navbar__nav">
          <ul className="navbar__nav__list">
            <li className="menu-item">
              <Link to="/" className="nav-link">
                Info
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/puzzles" className="nav-link">
                Leaderboard
              </Link>
            </li>
          </ul>
        </nav>)}
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;