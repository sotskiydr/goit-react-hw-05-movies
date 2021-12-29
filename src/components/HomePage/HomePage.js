import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import * as api from '../../api/api-service';
import MoviesList from '../MoviesList/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.getTrandingMovie().then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      {movies && (
        <ul>
          <MoviesList dataMovies={movies} />
        </ul>
      )}
    </>
  );
}
