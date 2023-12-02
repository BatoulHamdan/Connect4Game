import React from 'react'

const onClick = () => {
    alert("Clicked");
}

const GameCircle = () => {
  return (
    <div onClick={onClick}>
        GameCircle
    </div>
  )
}

export default GameCircle