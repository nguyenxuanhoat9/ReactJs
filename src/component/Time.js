import React from 'react'
import { useSelector } from 'react-redux'

function Time(props) {
  const time = useSelector(function(state){
    return state.time
  })
  return (
    <p id="result">{time}</p>

  )
}

export default Time
