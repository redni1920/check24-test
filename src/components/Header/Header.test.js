import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('It renders', () => {
  render(<Header />);

  expect(screen.getByText('vergliech')).toBeInTheDocument();
  expect(screen.getByText('standorte')).toBeInTheDocument();
  expect(screen.getByText('impressum')).toBeInTheDocument();
});