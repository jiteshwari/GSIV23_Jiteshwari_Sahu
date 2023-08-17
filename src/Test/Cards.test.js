import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Used to provide a router context
import Cards from '../Components/Cards';

describe('Cards Component', () => {
  const movies = [
    { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg', vote_average: 7.5, release_date: '2022-08-01' },
    { id: 2, title: 'Movie 2', poster_path: '/poster2.jpg', vote_average: 8.0, release_date: '2022-08-02' },
    // ... other movie data
  ];

  it('renders movie cards correctly', () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter>
        <Cards movies={movies} />
      </MemoryRouter>
    );

    // Check if movie titles are rendered
    expect(getByText('Movie 1')).toBeInTheDocument();
    expect(getByText('Movie 2')).toBeInTheDocument();

    // Check if movie images are rendered
    const movieImages = getAllByRole('img');
    expect(movieImages.length).toBe(movies.length);

    // Check if movie ratings are rendered
    expect(getByText('Rating:7.5★')).toBeInTheDocument();
    expect(getByText('Rating:8.0★')).toBeInTheDocument();

    // Check if release dates are rendered
    expect(getByText('Released : 2022-08-01')).toBeInTheDocument();
    expect(getByText('Released : 2022-08-02')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
