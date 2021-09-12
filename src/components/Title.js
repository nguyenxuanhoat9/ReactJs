import React from 'react'

function Title(props) {

  const setTitleStt = () =>{
    props.changeTitleStt()
  }


  const basicTitle =() =>{
    return(
      <h4
      onDoubleClick={setTitleStt}
      >{props.titleText}</h4>
    )
  }

  const editTitle = ()=>{
    return(
      <input type="text"
      value={props.titleText}
      onBlur={setTitleStt}
      />
    )
  }

  const returnTitle = ()=>{
    if(props.titleStt === true) return basicTitle()
    else return editTitle()
  }


  return (
    <>
		{returnTitle()}
    </>
  )
}

export default Title
