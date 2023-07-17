import React from 'react'

import './Box.css'
import './Scoreboard.css'

export const Scoreboard = ({scores, xPlaying, playAgain}) => {
  const {xScore, oScore, draw} = scores;

  return (
    <div className='scoreboard'>
      <div className={`x-score ${playAgain && 'inactive'} ${!xPlaying && 'inactive'}`}>
        <h3>Player X</h3>
        <span className={`score`}>{xScore}</span>
      </div>
      <div className='draw'>
        <h3>Draw</h3>
        <span className={`score`}>{draw}</span>
      </div>
      <div className={`o-score ${playAgain && 'inactive'} ${xPlaying && 'inactive'}`}>
        <h3>Player O</h3>
        <span className={`score`}>{oScore}</span>
      </div>
    </div>
  )
}