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
 const [puzzles,setPuzzles]= useState([ {
    title: "PS3",
    source: ps3,
    chars: [
      { name: "Metal Gear Mk.II", pic: "mgear2",found:false,x1: 81.88,y1: 43.93,x2:87.04,y2: 47.5 },
      { name: "Joel",pic: "joel",found:false,x1: 76.2,y1:55,x2:83,y2: 59.5 },
      { name: "Fat Princess",pic: "fatpr",found:false,x1: 19.7,y1:31.58,x2:26.03,y2: 34.89 },
    ],
  },  
  {
    title: "Wii",
    source: wii,
    chars: [
      { name: "Diddy Kong",pic: "diddy",found:false,x1:44.35,y1:53.15,x2: 49.4,y2:57.12 },
      { name: "Rayman", pic: "rayman",found:false, x1:57.8,y1:31.58,x2:67.13,y2:35.81},
      { name: "Midna", pic: "midna",found:false,x1:37.04,y1:26.5,x2: 41.95,y2: 29.84 },
    ],
  },
  {
    title: "SNES",
    source: snes,
    chars: [
      { name: "Link",pic: "link",found:false,x1:73.5,y1:39.9,x2:80.4,y2:43.96 },
      { name: "Crono", pic: "crono",found:false,x1:48.7,y1:56.63,x2:53.8,y2:61.03 },
      { name: "Donatello", pic: "donatello",found:false,x1:25.57,y1:65.32,x2:36.5,y2:69.03 },
    ],
  }])
  const [currentPuzzle, setCurrentPuzzle] = useState("")
  const [gameOver, setGameOver] = useState(false);
  const [timeDisplay,setTimeDisplay] = useState(0)
  const [showClock,setShowClock]=useState(false)
  const router = createBrowserRouter([
  
{
      element:<Root puzzle={currentPuzzle} showClock={showClock} setPuzzle={setCurrentPuzzle} gameOver={gameOver} setTimeDisplay={setTimeDisplay}/>, 
      errorElement:<ErrorPage/>,
      children: [
{
  path: "/",
  element: <PuzzleList puzzles={puzzles} setCurrentPuzzle={setCurrentPuzzle} setShowClock={setShowClock}/>,
},
{
  path: "puzzle",
  element: <Puzzle puzzle={currentPuzzle} setPuzzle={setCurrentPuzzle} setGameOver={setGameOver} gameOver={gameOver} timeDisplay={timeDisplay}/>,
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
