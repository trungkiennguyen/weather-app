import React, { Component } from "react";
import logo from "../img/icon.png";

class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <a href="">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <h1>App Weather</h1>
      </div>
    );
  }
}

export default AppHeader;
