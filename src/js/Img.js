import React, { useEffect } from 'react';

const Img = ({ index, style, src }) => {
  return (
    <li className="carousel_li">
      <img style={style} src={src}></img>
    </li>
  );
};

export default Img;
