import React from "react";
import "./Tags.scss";

const Tags = (props) => {


    return (
        <div className="apartment-tags">
            <ul><li>{props.tags}</li></ul>
        </div>
    );
};

export default Tags;