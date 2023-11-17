import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../../img/logo-footer.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <Link to="/home">
        <img src={logoFooter} alt="Logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
