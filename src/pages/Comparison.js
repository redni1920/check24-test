import React from 'react';

// Components
import Header from '../components/Header';
import Carousel from '../components/Carousel';

const Comparison = ({
  slides
}) => {
  return (
    <>
      <Header />
      <Carousel slides={slides} />
    </>
  );
};

export default Comparison;
