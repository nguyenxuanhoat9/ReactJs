import React from 'react'
import { useDispatch } from 'react-redux'

function Button(props) {
  const dispatch = useDispatch()

  const onClickButton =(e)=>{
    dispatch({type : props.type})
  }
  return (
    <button  onClick={onClickButton} class="btn btn-dark">{props.text}</button>

  )
}

export default Button
