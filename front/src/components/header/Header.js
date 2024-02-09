import React from "react";
import {  NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/" >
        <img className="logo-header" src={logo} alt="Logo" />
      </NavLink>
      <nav>
        <ul>
          <li className="nav-link">
            <NavLink exact to="/" activeClassName="active-link">Accueil</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about" activeClassName="active-link">À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
