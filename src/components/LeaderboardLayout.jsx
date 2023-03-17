import React from 'react'
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';

function LeaderboardLayout() {
    let puzzles=useLoaderData()
  return (
    <>
    <div className="puzzles">
    {puzzles.map((puzzle) => {
      return (
        <>
          <NavLink
            className="puzzle-link"
            to={`/leaderboard/${puzzle.title}`}
            style={({isActive,isPending})=>{
                return {
                    border: isActive ? "2px solid red":""
                }
            }}
           //  onClick={()=>{
           //   setCurrentPuzzle(puzzle)
           //   setShowChars(true)
           //   setShowClock(true)
           //  }}
          >
            <div className='card'>
              {/* <h1>{puzzle.title}</h1> */}
              <div className="card-image">
              <figure className="image">
              <img src={puzzle.source} />
</figure>
              </div>
            </div>
          </NavLink>
        </>
      );
    })}
  </div>
  <Outlet/>
  </>
  )
}

export default LeaderboardLayout