import React from 'react'
import { getPuzzle } from './puzzles';

export async function puzzleLoader({ params }) {
  console.log(params);
  return getPuzzle(params.puzzleTitle);
}

const Puzzle = () => {
  return (
    <div>Puzzle</div>
  )
}

export default Puzzle