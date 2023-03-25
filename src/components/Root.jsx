import { forwardRef } from "react";
import { Outlet, Link, useMatches, useRouteLoaderData } from "react-router-dom";
import GameTimer from "./GameTimer";

const Root = (props) => {
  const data = useRouteLoaderData("puzzle");
  return (
    
    <>
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Find 'Em
          </Link>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            {data ? (
              <>
                {" "}
                
                  
                    {data.chars.map((char) => {
                      return <div className="navbar-item">{char.name}</div>;
                    })}
                  
                

              </>
            ) : (
              <>
                <Link to="/info" className="navbar-item">
                  Info
                </Link>
<Link to="/" className="navbar-item">Puzzles</Link>
                <Link to="/leaderboard/PS3" className="navbar-item">
                  Leaderboard
                </Link>
              </>
            )}
                            
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
