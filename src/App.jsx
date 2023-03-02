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
  children: [
    {
      path: ":puzzleTitle",
      element: <Puzzle/>,
loader: puzzleLoader
    }
  ]
}
      ]
    }
])

return (
<RouterProvider router={router} />
)
}

export default App
