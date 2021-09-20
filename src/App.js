import React from "react";
import { Provider } from "react-redux";
import Button from "./component/Button";
import Number from "./component/Number";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
<div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 text-center">
      <div id="main">
        <Number/>
        <div>
          <Button text ="Get Number" type = "GET"/>
          <Button text ="Reset" type ="RESET"/>
        </div>
      </div>
    </div>
  </div>
</div>
</Provider>

  );
}

export default App;
