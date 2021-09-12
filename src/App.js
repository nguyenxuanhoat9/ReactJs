import React, {State} from "react";
import Description from "./components/Description";
import Title from "./components/Title";


function App() {

  const [title, setTitle] = React.useState("What is Lorem Ipsum?") 
  const [titleStt,setTitleStt] = React.useState(true)

  const changeTitleStt =()=>{
    setTitleStt(!titleStt)
  }

  const [des, setDes] = React.useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  ") 
  const [desStt,setDestStt] = React.useState(true)
  const changeDesStt =() =>{
    setDestStt(!desStt)
  }
  

  return (
<div id="main">
	<div class="content-item">
		<img src="car.jpg"/>
		<Title
    titleStt= {titleStt}
    titleText = {title}
    changeTitleStt={changeTitleStt}
    />
    <Description
    desStt={desStt}
    desText={des}
    changeDesStt={changeDesStt}
    />
	</div>
</div>
  );
}

export default App;
