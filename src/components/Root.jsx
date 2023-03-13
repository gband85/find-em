import { Outlet, Link } from "react-router-dom";
import GameTimer from "./GameTimer";

const Root = (props) => {
  return (
    <>
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" onClick={()=>setPuzzle("")}>
            Find 'Em
          </Link>
        </div>
        
        <div className="navbar-menu">

        <div className="navbar-start">

       </div>
          

       <div className="navbar-end">
        {props.puzzle ?    <div style={{zIndex:5000}} className="navbar-item">
               {/* <a className="navbar-link">
                Chars2
               </a> */}
               <ul  className="char-names">
                 {props.puzzle.chars.map(char=>{
                   return (
                     <li className="navbar-ll">{char.name}</li>
                   )
                 })}
               </ul> 
              </div>: null}
          {props.showClock ? <GameTimer gameOver={props.gameOver} setTimeDisplay={props.setTimeDisplay}/> : 
             <>
             <Link to="/info" className="navbar-item">
                Info
              </Link>
            
            
              <Link to="/leaderboard" className="navbar-item" onClick={}>
                Leaderboard
              </Link>
              </>}
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;