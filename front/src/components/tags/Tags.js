import React from "react";
import "./Tags.scss";

const Tags = (props) => {
  const listTags = props.tags;
  return (
    <div className="apartment-tags">
      <ul className="tags-list">
        {listTags.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
