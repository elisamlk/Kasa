import React from "react";
import "./Host.scss";

const Host = (props) => {
    return (
        <div className="host">
            <h3 className="host-name">{props.name}</h3>
            <img className="host-img" src={props.picture} alt={props.name} />
        </div>
    );
};

export default Host;