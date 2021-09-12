import React from 'react'

function Description(p) {
  const setDesStt = () => {
    p.changeDesStt()
  }
  const basicDes = () => {
    return (
      <p
        onDoubleClick={setDesStt}
      >
        {p.desText}
      </p>
    )
  }
  const editDes = () => {
    return (
      <textarea name="" id=""
        onBlur={setDesStt}
        value={p.desText}
      >
        {/* {p.desText} */}
      </textarea>
    )
  }

  const returnDes = () => {
    if (p.desStt === true) return basicDes()
    else return editDes()
  }

  return (
    <>
      {returnDes()}
    </>

  )
}

export default Description
