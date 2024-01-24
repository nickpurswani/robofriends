import React from 'react';
import { render, screen, waitFor,act  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainPage from './MainPage';
import '@testing-library/jest-dom'


const mockProps = {
    onRequestRobots: jest.fn(() => Promise.resolve([
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'John Doe',
        username: 'john_doe',
        email: 'john.doe@example.com',
      },

     
    ])),
    robots: [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
      },
      {
        id: 2,
        name: 'John Doe',
        username: 'john_doe',
        email: 'john.doe@example.com',
      }], // Initial empty state
    searchField: '',
    onSearchChange: jest.fn(), // Mock onSearchChange function
  };
  test('renders MainPage with loading message while fetching data', async () => {
    const { rerender } = render(<MainPage {...mockProps}  />);
    
    expect(screen.getByText('.....Loading')).toBeInTheDocument();
    let fetcheddata;
    await act(async () => {
      // Simulate the asynchronous operation
     await mockProps.onRequestRobots();
    });
    rerender(<MainPage {...mockProps} loading={false} />);
    expect(screen.queryByText('.....Loading')).not.toBeInTheDocument();
    expect(screen.queryByText('.....Loading')).not.toBeInTheDocument();
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
test('filters robots with  search field', async () => {
    const { rerender } = render(<MainPage {...mockProps} />);
    
    expect(screen.getByText('.....Loading')).toBeInTheDocument();
    let fetcheddata;
    await act(async () => {
      // Simulate the asynchronous operation
     await mockProps.onRequestRobots();
    });
    rerender(<MainPage {...mockProps}searchField="Leanne" loading={false} />);
    expect(screen.queryByText('.....Loading')).not.toBeInTheDocument();
    expect(screen.queryByText('.....Loading')).not.toBeInTheDocument();
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
  });