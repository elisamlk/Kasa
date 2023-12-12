import React, { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleCollapse} style={{ cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
        <strong>{title}</strong>
      </div>
      {isOpen && <div>{content}</div>}
    </div>
  );
};

export default Collapse;

