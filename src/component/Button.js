import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

let interval
function Button(props) {
  const dispatch = useDispatch()
  const time = useSelector((store)=>{
    return store.time
  })

  const start =()=>{
    interval = setInterval(() => {
      dispatch({type : "START"})
    }, 1000);
  }
  const stop = ()=>{
    clearInterval(interval)
    // dispatch({type : "STOP"})
  }
  useEffect(()=>{
    if(time === 0){
        stop();
    }
}, [time]);
  return (
    <div className="buttons">
    <input type="button" id="start" defaultValue="Start" onClick={start} />
    <input  type="button" id="stop" defaultValue="Stop"  onClick={stop} />
  </div>
  )
}

export default Button
