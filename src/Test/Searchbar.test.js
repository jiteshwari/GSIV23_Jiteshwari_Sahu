import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Searchbar from './Searchbar';

describe('Searchbar Component', () => {
  it('calls search handler with the correct keyword', () => {
    const mockSearchHandler = jest.fn(); // Create a mock function
    const { getByPlaceholderText } = render(<Searchbar searchhandler={mockSearchHandler} />);

    const searchInput = getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'test keyword' } }); // Simulate input change

    expect(searchInput.value).toBe('test keyword'); // Check if input value has changed
    expect(mockSearchHandler).toHaveBeenCalledWith('test keyword'); // Check if search handler was called with the correct keyword
  });
});
