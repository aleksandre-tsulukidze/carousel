import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import './scss/style.scss';
import image1 from './assets/furniture1.jpg';
import image2 from './assets/furniture2.jpg';
import image3 from './assets/furniture3.jpg';
import image4 from './assets/furniture4.jpg';
import image5 from './assets/furniture5.jpg';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('basdbsadbad');
});

const Carousel = () => {
  const [image, setImage] = useState(0);
  const [vision, setVision] = useState('img');

  const onMouseDownHandler = (e) => {
    console.log(e.clientX);
  };
  const onMouseMoveHandler = (e) => {
    console.log(e.clientX);
  };
  return (
    <div
      onClick={(e) => {
        console.log(e.clientX);
      }}>
      <div className="carousel">
        <div
          onMouseDown={(e) => onMouseDownHandler(e)}
          onMouseMove={(e) => {
            onMouseMoveHandler(e);
          }}
          className="helper">
          <img src={image1}></img>
          <img src={image2}></img>
          <img src={image3}></img>
          <img src={image4}></img>
          <img src={image5}></img>
        </div>
      </div>
      <button>Press me</button>
    </div>
  );
};

ReactDom.render(<Carousel />, document.getElementById('root'));
