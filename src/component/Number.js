import React from 'react'
import { useSelector } from 'react-redux'

function Number(props) {
  const number = useSelector(function(state){
    return state.num
  })
  return (

    <h3>{number}</h3>
  )
}

export default Number
