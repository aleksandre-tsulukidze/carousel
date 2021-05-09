import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import useTimer from './js/useTimer';
import './scss/style.scss';
import image1 from './assets/furniture1.jpg';
import image2 from './assets/furniture2.jpg';
import image3 from './assets/furniture3.jpg';
import image4 from './assets/furniture4.jpg';
import image5 from './assets/furniture5.jpg';
import Img from './js/Img';
import Mapping from './js/Mapping';

const Carousel = () => {
  const [images] = useState([image1, image2, image3, image4, image5]);
  const [index, setIndex] = useState(0);
  const [starter, setStarter] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const { checker, setWaiting } = useTimer(swiping);

  useEffect(() => {
    if (checker <= 0 && swiping) {
      return;
    } else if (swiping === false) {
      setIndex(checker);
    }
  }, [checker]);

  const onTouchStartHandler = e => {
    setStarter(e.touches[0].clientX);
  };
  const onTouchMoveHandler = e => {
    setSwiping(true);
    if (index >= -4 && index <= 0) {
      setIndex((index - (starter - e.touches[0].clientX) / 50000).toFixed(3));
    }
  };
  const onTouchEndHandler = () => {
    setSwiping(false);
    setIndex(Math.round(index));
    setWaiting(Math.round(index));
  };

  return (
    <div>
      <div
        className="carousel"
        onTouchStart={e => onTouchStartHandler(e)}
        onTouchMove={e => onTouchMoveHandler(e)}
        onTouchEnd={() => onTouchEndHandler()}>
        <ul className={swiping ? 'swapping' : 'helper'}>
          {images.map((image, id) => {
            return (
              <Img
                key={id}
                style={{ transform: 'translateX(' + 960 * index + 'px )' }}
                src={image}
              />
            );
          })}
        </ul>
      </div>
      <button
        className="back"
        className={index == 0 ? 'back inactive' : 'back active'}
        onClick={
          index == 0
            ? () => {}
            : () => {
                setWaiting(index + 1);
                setIndex(index + 1);
              }
        }>
        &laquo;
      </button>
      <button
        className={index == -4 ? 'next inactive' : 'next active'}
        onClick={
          index == -4
            ? () => {}
            : () => {
                setWaiting(index - 1);
                setIndex(index - 1);
              }
        }>
        &raquo;
      </button>
      <Mapping index={index} setIndex={setIndex} />
    </div>
  );
};

ReactDom.render(<Carousel />, document.getElementById('root'));
