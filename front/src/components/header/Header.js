import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo-header" src={logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li className="nav-link">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
