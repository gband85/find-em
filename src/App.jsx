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
import PuzzleList from './components/PuzzleList';
import Puzzle from './components/Puzzle';
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
  children: [
    {
element: <PuzzleList/>,
loader: async()=>getPuzzles(),
    },
    {
      path: ":puzzleTitle",
      element: <Puzzle/>,
loader: async ({params})=>getPuzzle(params.puzzleTitle)
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
