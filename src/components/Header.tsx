import React from "react";
import logo from "../logo-coding-cerrado.png";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <div className="Header-title">To-do list</div>
      <div className="Header-logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
