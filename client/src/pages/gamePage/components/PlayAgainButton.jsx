import React from 'react'
import './PlayAgainButton.css'

export const PlayAgainButton = ({newRound}) => {
  return (
    <button className='play-again' onClick={newRound}>Play Again</button>
  )
}