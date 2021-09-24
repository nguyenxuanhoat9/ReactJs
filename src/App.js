import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Control from "./component/Control";
import Time from "./component/Time";
import Button from "./component/Button";


function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="container">
          <Control />
          <Time />
          <p id="sec">sec</p>
        </div>
        <Button />
      </div>

    </Provider>

  );
}

export default App;
