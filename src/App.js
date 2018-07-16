import React, { Component, Fragment } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./css/index.css";
import Header from "./components/Header";
import BottomNavbar from "./components/BottomHeader";
import About from "./components/About";
import Skills from "./components/Skills";
import Conferences from "./components/Conferences";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div>
            <Route exact path="/" component={About} />
            <Route exact path="/skills"  component={Skills} />
            <Route exact path="/conferences"  component={Conferences} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </BrowserRouter>
        <BottomNavbar />
      </Fragment>
    );
  }
}

export default App;
