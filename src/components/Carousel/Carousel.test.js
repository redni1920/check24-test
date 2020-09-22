import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from './Carousel';

import slide1 from '../../assets/images/slide_1.jpg';
import slide2 from '../../assets/images/slide_2.jpg';
import slide3 from '../../assets/images/slide_3.jpg';

const slides = [
  {
    src: slide1,
    legend: 'Jetzt Burger mit Bio Fleisch probieren 1'
  },
  {
    src: slide2,
    legend: 'Jetzt Burger mit Bio Fleisch probieren 2'
  },
  {
    src: slide3,
    legend: 'Jetzt Burger mit Bio Fleisch probieren 3'
  }
];

test('It renders only the first slide', () => {
  render(<Carousel slides={slides} />);

  expect(screen.getByText('Jetzt Burger mit Bio Fleisch probieren 1')).toBeInTheDocument();
  expect(() => screen.getByText('Jetzt Burger mit Bio Fleisch probieren 2')).toThrow();
  expect(() => screen.getByText('Jetzt Burger mit Bio Fleisch probieren 3')).toThrow();
});

test('It renders next slide when next button is clicked', () => {
  render(<Carousel slides={slides} />);

  const nextBtn = screen.getByText('Next');

  expect(nextBtn).toBeInTheDocument();
  userEvent.click(nextBtn);
  expect(screen.getByText('Jetzt Burger mit Bio Fleisch probieren 2')).toBeInTheDocument();
});

test('It renders previous slide when prev button is clicked', () => {
  render(<Carousel slides={slides} />);

  const prevBtn = screen.getByText('Prev');

  expect(prevBtn).toBeInTheDocument();
  userEvent.click(prevBtn);
  expect(screen.getByText('Jetzt Burger mit Bio Fleisch probieren 3')).toBeInTheDocument();
});