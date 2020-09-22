import React, { useState } from 'react';
import './styles.scss';

const Carousel = ({ slides }) => {
  const [activeSlide, updateIndex] = useState(0);

  const onPrev = () => {
    const newIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
    updateIndex(newIndex);
  };

  const onNext = () => {
    const newIndex = (activeSlide + 1) % slides.length;
    updateIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div className="slide">
        <img src={slides[activeSlide].src} />
        <h2 className="legend">{slides[activeSlide].legend}</h2>
      </div>
      <ul className="slide-buttons">
        <li>
          <button onClick={onPrev}>Prev</button>
        </li>
        <li>
          <button onClick={onNext}>Next</button>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
