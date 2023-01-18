import React from "react";
// import ReactDOM from "react-dom";

import { Route, Routes} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";


function App() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/about" component={<About />} />
          <Route exact path="/login" component={<Login />} />
          <Route exact path="/" component={<Home />} />
        </Routes>
      </div>
    );
  }
  
  export default App;