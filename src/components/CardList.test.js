import React from 'react';
import { render } from '@testing-library/react';
import CardList from './CardList';

const filteredRobots = [{
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz'
}];

test('renders without crashing', () => {
  const { asFragment } = render(<CardList robots={filteredRobots} />);
  expect(asFragment()).toMatchSnapshot();
});
