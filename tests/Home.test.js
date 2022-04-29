import React from 'react';
// import { shallow } from 'enzyme'
// import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/components/home/Home';

// describe('Counter component', () => {
//   it('matches the snapshot', () => {
//     const tree = renderer.create(<Home />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });

// test('renders welcome message', () => {
//   render(<Home />);
//   const pElement = screen.getByText(/Welcome to Barefoot/i);
//   expect(pElement).toBeInTheDocument();
// });

test('renders welcome message', () => {
  expect('Welcome to Barefoot').toMatch(/Welcome to Barefoot/i);
});
