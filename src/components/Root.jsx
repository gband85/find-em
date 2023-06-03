import { forwardRef, useRef, useState } from "react";
import { Outlet, Link, useMatches, useRouteLoaderData, NavLink } from "react-router-dom";
import GameTimer from "./GameTimer";
import '../css/Root.css'

const Root = (props) => {
  const data = useRouteLoaderData("puzzle");
  const ref=useRef();
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
      <nav className="navbar is-info"  role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-size-3">
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

          <div className="navbar-end">
      {data ? (
              <>
                
                  
                    {data.chars.map((char) => {
                      return <a className="navbar-item">{char.name}</a>;
                    })}
                  
                

              </>
            ) : (
              <>
                <NavLink to="/info" className={({isActive,isPending})=>
                        isActive ? "navbar-item is-active is-size-4":"navbar-item is-size-4"
                }>
                  Info
                </NavLink>
<NavLink to="/" className={({isActive,isPending})=>                
                isActive ? "navbar-item is-active is-size-4":"navbar-item is-size-4"
            }>Puzzles</NavLink>
                <NavLink to="/leaderboard/PS3" className={({isActive,isPending})=> isActive ? "navbar-item is-active is-size-4":"navbar-item is-size-4"
                    }>
                  Leaderboard
                </NavLink>
              </>
            )}
                            
          </div>
        </div>
      </nav>
      
        <Outlet />
      
    </>
  );
};

export default Root;
