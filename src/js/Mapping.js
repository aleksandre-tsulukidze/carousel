import React from 'react';

const Mapping = ({ index }) => {
  return (
    <div className="mapping">
      <ul>
        <li className={index == 0 ? 'active' : ''}>&bull;</li>
        <li className={index == -1 ? 'active' : ''}>&bull;</li>
        <li className={index == -2 ? 'active' : ''}>&bull;</li>
        <li className={index == -3 ? 'active' : ''}>&bull;</li>
        <li className={index == -4 ? 'active' : ''}>&bull;</li>
      </ul>
    </div>
  );
};

export default Mapping;
