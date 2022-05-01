import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import App from './App';
import Home from '../src/components/home/Home';

describe('Snapshot Test', () => {
  test('Snapshot for App Component', () => {
    const renderedComponent = renderer.create(<Home />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
