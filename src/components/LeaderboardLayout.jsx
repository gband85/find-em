import React from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';

function LeaderboardLayout() {
    let puzzles=useLoaderData()
  return (
    <>
    {/* <div className="puzzle block"> */}
    <div className="columns" id='leader-list'>
    {puzzles.map((puzzle) => {
      return (
        <div className='column'>
          <NavLink
            className={({isActive,isPending})=>
                        isActive ? "active-image":""
                }
            to={`/leaderboard/${puzzle.title}`}
          >
            <div className='card grow'>
              {/* <h1>{puzzle.title}</h1> */}
              <div className="card-image">

              <img src={puzzle.source} className='image'/>

              </div>
            </div>
          </NavLink>
        </div>
      );
    })}
    </div>
  {/* </div> */}
 <Outlet/>
  </>
  )
}

export default LeaderboardLayout