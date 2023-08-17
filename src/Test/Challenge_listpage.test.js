import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux'; // Mock these modules
import Challenge_listpage from './Challenge_listpage';

// Mock useDispatch and useSelector
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock useDispatch implementation
const mockDispatch = jest.fn();

// Mock useSelector implementation
const mockSelector = jest.fn();

beforeEach(() => {
  useDispatch.mockReturnValue(mockDispatch);
  useSelector.mockReturnValue(mockSelector);
});

describe('Challenge_listpage Component', () => {
  it('renders the component', () => {
    render(<Challenge_listpage />);
    // Test component rendering here
  });

  it('loads more movies when LoadMore button is clicked', () => {
    render(<Challenge_listpage />);
    // Test loading more movies when LoadMore button is clicked
  });

  it('searches for movies when Searchbar is used', () => {
    render(<Challenge_listpage />);
    // Test searching for movies when Searchbar is used
  });
  
  // Add more test cases as needed
});
