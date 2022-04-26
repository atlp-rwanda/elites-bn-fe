import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

test('renders welcome message', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const pElement = screen.getByText(/Welcome to Barefoot/i);
  expect(pElement).toBeInTheDocument();
});
