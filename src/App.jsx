import { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import PuzzleList, { puzzleListLoader } from './components/PuzzleList';
import Puzzle, { puzzleLoader } from './components/Puzzle';
import { getPuzzle, getPuzzles } from './components/puzzles';
import ps3 from "./assets/pierre-roussel-ps3-phone3.jpg";
import wii from "./assets/pierre-roussel-wii-phone3.jpg";
import snes from "./assets/pierre-roussel-snes-phone3-us.jpg";
import "bulma/css/bulma.min.css";
import Leaderboard from './components/Leaderboard';

function App() {
 

  const [timeDisplay,setTimeDisplay] = useState("00:11:32")
  const router = createBrowserRouter([
  
{
      element:<Root/>, 
      errorElement:<ErrorPage/>,
      children: [
{
  path: "/",
  element: <PuzzleList puzzles={puzzles} setCurrentPuzzle={setCurrentPuzzle} setShowClock={setShowClock}/>,
},
{
  id:"puzz",
},
{
  path: "leaderboard",
  element: <Leaderboard/>,
}
      ]
    }
])

return (
<RouterProvider router={router} />
)
}

export default App
