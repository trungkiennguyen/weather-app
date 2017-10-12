import React, { Component } from "react";
import "./App.css";
import AppHeader from "./Components/app-header.js";
import AppMain from "./Components/app-main.js";
import AppDisplay from "./Components/app-display.js";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppMain />
        <AppDisplay />
      </div>
    );
  }
}

export default App;
