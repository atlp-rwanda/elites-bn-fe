import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/components/home/Home';

test('renders welcome message', () => {
  render(<Home />);
  const pElement = screen.getByText(/Welcome to Barefoot/i);
  expect(pElement).toBeInTheDocument();
});
