import { forwardRef, useRef, useState } from "react";
import { Outlet, Link, useMatches, useRouteLoaderData, NavLink } from "react-router-dom";
import GameTimer from "./GameTimer";

const Root = (props) => {
  const data = useRouteLoaderData("puzzle");
  const [active, setActive] = useState(false)
  const toggleActive=()=>{
setActive(!active)
  }
  const handleResize=()=>{
    if (window.innerWidth >= 769) {
      if (ref.current.classList.contains('is-active')) {
        toggleActive()
      }
     }
  }
  return (
    
    <>
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" id='brand'>
            Find 'Em
          </Link>
          <a role="button" className={active ? "navbar-burger is-active" : "navbar-burger"} onResize={handleResize} onClick={()=>toggleActive()} aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
        </div>

        <div className={active ? "navbar-menu is-active" : "navbar-menu"}>
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
                <NavLink to="/info" className={({isActive,isPending})=>
                        isActive ? "navbar-item is-active":"navbar-item"
                }>
                  Info
                </NavLink>
<NavLink to="/" className={({isActive,isPending})=>                
                isActive ? "navbar-item is-active":"navbar-item"
            }>Puzzles</NavLink>
                <NavLink to="/leaderboard/PS3" className={({isActive,isPending})=> isActive ? "navbar-item is-active":"navbar-item"
                    }>
                  Leaderboard
                </NavLink>
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
