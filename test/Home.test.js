import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../src/components/home/Home';

describe('Snapshot Test', () => {
  test('Snapshot for Home Component', () => {
    const renderedComponent = renderer.create(<Home />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
