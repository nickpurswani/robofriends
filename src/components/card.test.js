import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('MyComponent snapshot', () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
