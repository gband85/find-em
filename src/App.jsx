import { useEffect, useRef, useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import PuzzleList, { puzzleListLoader } from './components/PuzzleList';
import Puzzle, { puzzleLoader } from './components/Puzzle';
import { getPuzzle, getPuzzles } from './components/puzzles';
import ps3 from "./assets/pierre-roussel-ps3-phone3.jpg";
import wii from "./assets/pierre-roussel-wii-phone3.jpg";
import snes from "./assets/pierre-roussel-snes-phone3-us.jpg";
import "bulma/css/bulma.min.css";
import Leaderboard from './components/Leaderboard';
import { getScores } from './components/firebasefns';
import LeaderboardLayout from './components/LeaderboardLayout';
import Info from './components/Info';
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';


function App() {
  const router = createBrowserRouter([
  
    {
          element:<Root/>, 
          id: 'root',
          errorElement:<ErrorPage/>,
          children: [
            {
              path: "/",
              element: <PuzzleList/>,
              loader: async ()=>{
               let puzzles=await getPuzzles()
               return puzzles
              }
            },
    {
      path: "/info",
      element: <Info/>
    },

    {
      path: "/puzzles/:puzzleTitle",
      element: <Puzzle/>,
      loader: async ({params})=>{
        const puzzle=await getPuzzle(params.puzzleTitle)
          return puzzle;
      },
      id:"puzzle",
    },
    {
        path: "/leaderboard",
      element: <LeaderboardLayout />,
    loader: async ()=>{
      let puzzles=await getPuzzles()
      return puzzles
     },
     id: "leader",
       children:[
        {
          path: '/leaderboard/:puzzleTitle',
          element: <Leaderboard/>,
       loader: async ({params})=>{
        let scores = await getScores(params.puzzleTitle);
        let puzzle=await getPuzzle(params.puzzleTitle)
        return {scores,puzzle};
       },
      }
       ]
    }
          ]
        }
    ],{
      // basename: "/projects/find-em"
    }
    )
    
    return (
    <RouterProvider router={router} />
    )
}

export default App;
