import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {

    return (
        <div class="not-found">
            <h2 className="item">404</h2>
            <h3 className="item">Oups, la page que vous demandez n'existe pas.</h3>
            <Link to="/home" className="item">Retourner sur la page d'accueil</Link>
        </div>

    );
};

export default NotFound;