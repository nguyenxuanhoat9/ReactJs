import React from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Detail from "./component/Detail";
import Home from "./component/Home";
import Page404 from "./component/Page404";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/details" component={Detail}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route component={Page404}/>
      </Switch>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div id="footer" class="col-lg-12 col-md-12 col-sm-12 bg-dark navbar-dark">
                © 2019 | Designed by Vietpro Academy
            </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
