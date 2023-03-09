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

function App() {
 const [puzzles,setPuzzles]= useState([ {
    title: "PS3",
    source: ps3,
    chars: [
      // { name: "Metal Gear Mk.II", shortName: "mgmk2", pic: "mgear2",found:false,x1: 887,y1: 1145,x2:940,y2: 1205 },

      { name: "Metal Gear Mk.II", shortName: "mgmk2", pic: "mgear2",found:false,x1: 81.88,y1: 43.93,x2:87.04,y2: 47.5 },
      { name: "Joel", shortName: "joel",pic: "joel",found:false,x1: 76.2,y1:55,x2:83,y2: 59.5 },
      { name: "Fat Princess", shortName:"fatpr",pic: "fatpr",found:false,x1: 19.7,y1:31.58,x2:26.03,y2: 34.89 },
    ],
  },  
  {
    title: "Wii",
    source: wii,
    chars: [
      { name: "Diddy Kong", shortName:"diddy",pic: "diddy",found:false,x1:44.35,y1:53.15,x2: 49.4,y2:57.12 },
      { name: "Rayman", shortName:"rayman", pic: "rayman",found:false, x1:57.8,y1:31.58,x2:67.13,y2:35.81},
      { name: "Midna", shortName: "midna", pic: "midna",found:false,x1:37.04,y1:26.5,x2: 41.95,y2: 29.84 },
    ],
  },
  {
    title: "SNES",
    source: snes,
    chars: [
      { name: "Link", shortName: "link",pic: "link",found:false,x1:73.5,y1:39.9,x2:80.4,y2:43.96 },
      { name: "Crono", shortName:"crono",pic: "crono",found:false,x1:48.7,y1:56.63,x2:53.8,y2:61.03 },
      { name: "Donatello", shortName: "donatello", pic: "donatello",found:false,x1:25.57,y1:65.32,x2:36.5,y2:69.03 },
    ],
  }])
  const [currentPuzzle, setCurrentPuzzle] = useState("")
  const router = createBrowserRouter([
  
{
      element:<Root />, 
      errorElement:<ErrorPage/>,
      children: [
{
path: "/",
element: <Home/>
},
{
  path: "puzzles",
  element: <PuzzleList/>,
  loader: puzzleListLoader,
},
{
  path: "/puzzles/:puzzleTitle",
  element: <Puzzle/>,
loader: puzzleLoader
}
      ]
    }
])

return (
<RouterProvider router={router} />
)
}

export default App
