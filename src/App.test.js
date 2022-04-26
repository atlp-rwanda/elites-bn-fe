import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const pElement = screen.getByText(/Welcome to Barefoot/i);
  expect(pElement).toBeInTheDocument();
});
