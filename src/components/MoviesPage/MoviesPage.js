import * as api from '../../api/api-service';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MoviesPage() {
  const [value, setValue] = useState(null);
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!params) return;
    api.getQueryMovie(params).then(data => setMovies(data.results));
  }, [params]);

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/movies/?query=${value}`);
  }

  function handleChangeValue(e) {
    setValue(e.target.value.trim());
  }

  function handleBack(e) {
    navigate('/');
  }

  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <button type="submit">Search</button>
        <input
          onChange={e => {
            handleChangeValue(e);
          }}
        />
      </form>
      <button
        type="button"
        onClick={e => {
          handleBack(e);
        }}
      >
        go back
      </button>
      {movies && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
