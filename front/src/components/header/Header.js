import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/home">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li className="nav-link">
            <Link to="/home">Accueil</Link>
          </li>
          <li className="nav-link">
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
