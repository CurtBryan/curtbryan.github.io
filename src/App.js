import React, { Component } from "react";
import "./App.css";
import Skills from "./Components/Skills/Skills";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/Skills" component={Skills} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
