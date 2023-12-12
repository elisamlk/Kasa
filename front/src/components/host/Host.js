import React from "react";
import "./Host.scss";

const Host = (props) => {
    return (
        <div className="host">
            <img src={props.picture} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    );
};

export default Host;