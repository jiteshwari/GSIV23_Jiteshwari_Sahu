import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Challenge_detailpage from './Challenge_detailpage';

// Mock useParams, useDispatch, and useSelector
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock useDispatch and useSelector implementations
const mockDispatch = jest.fn();
const mockSelector = { /* Your mocked selector data here */ };

beforeEach(() => {
  useParams.mockReturnValue({ id: '123' });
  useDispatch.mockReturnValue(mockDispatch);
  useSelector.mockReturnValue(mockSelector);
});

describe('Challenge_detailpage Component', () => {
  it('renders the component', () => {
    render(<Challenge_detailpage />);
    // Test component rendering here
  });

  it('dispatches movie_details action with correct movie ID', () => {
    render(<Challenge_detailpage />);
    // Test if movie_details action is dispatched with correct ID
  });

  it('renders movie details when selector data is available', () => {
    useSelector.mockReturnValueOnce(mockSelector); // Set selector data

    render(<Challenge_detailpage />);
    // Test if movie details are rendered using the provided mock selector data
  });
  
  // Add more test cases as needed
});
