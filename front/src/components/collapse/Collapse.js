


import React, { useState } from 'react';
import "./Collapse.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse-area">
      <div className={`collapse-name ${isOpen ? 'open' : 'closed'}`} onClick={toggleCollapse}>
        <h3 style={{ margin: '0', marginLeft: '10px' }}>{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
        <p className="content-collapse">{content}</p>
      </div>
    </div>
  );
};



export default Collapse;


