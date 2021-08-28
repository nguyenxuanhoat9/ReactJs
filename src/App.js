import React,{useState} from "react"

function App() {
  const [smImage, setSmImage]= useState({
    active: 0,
    srcImg: ["images/img-1.jpg","images/img-2.jpg","images/img-3.jpg"]
  })

  function toggleActive(index) {
    setSmImage({...smImage, active: index})
  }
  function activeClass(index){
    if(smImage.active == index){
      return "active"
    }
    else return ""
  }
  return (
    <div id="products">
      <div id="large">
        <img src={smImage.srcImg[smImage.active]} />
      </div>

      <div id="small">
        {smImage.srcImg.map((element, index)=>(
          <img key = {index}
          className={activeClass(index)}
          onClick={ ()=>{
            toggleActive(index)
          }}
          src={element} />
        ))}
      </div>
    </div>

  );
}

export default App;
