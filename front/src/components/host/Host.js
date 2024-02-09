import React from "react";
import "./Host.scss";

const Host = (props) => {
  const nameWords = props.name.split(" ");
  const formattedName = `${nameWords[0]}<br />${nameWords.slice(1).join(" ")}`;

  return (
    <div className="host">
      <h3 className="host-name" dangerouslySetInnerHTML={{ __html: formattedName }}></h3>
      <img className="host-img" src={props.picture} alt={props.name} />
    </div>
  );
};

export default Host;