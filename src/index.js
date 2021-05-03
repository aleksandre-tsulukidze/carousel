import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import './scss/style.scss';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  console.log('basdbsadbad');
});

const Carousel = () => {
  const [image, setImage] = useState(0);
  const [vision, setVision] = useState('img');
  useEffect(() => {
    if (image <= 4) {
      if (image == 4) {
        setTimeout(() => {
          setImage(0);
        }, 1500);
      }
      setTimeout(() => {
        setImage(image + 1);
        console.log(image);
        setTimeout(() => {
          setVision('img visible');
        }, 500);
      }, 1500);
    }
  }, [image]);
  return (
    <div
      onClick={(e) => {
        console.log(e.clientX);
      }}>
      <div className="carousel">
        {/* {images.map((image) => {
          return <img src={'images/furniture' + image + '.jpg'}></img>;
        })} */}
        <img className={vision} src={'images/furniture' + image + '.jpg'}></img>
      </div>
      <button>Press me</button>
    </div>
  );
};

ReactDom.render(<Carousel />, document.getElementById('root'));
