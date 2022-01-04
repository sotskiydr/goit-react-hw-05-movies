import * as api from '../../api/api-service';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Pagination, Stack } from '@mui/material';

export default function MoviesPage() {
  const [value, setValue] = useState(null);
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const paramsQuery = new URLSearchParams(location.search).get('query');
  const paramsPage = new URLSearchParams(location.search).get('page');

  useEffect(() => {
    if (!paramsQuery) return;
    api.getQueryMovie(paramsQuery, paramsPage).then(data => {
      setMovies(data);
      setPage(data.page);
      setPageQty(data.total_pages);
    });
  }, [paramsQuery, paramsPage, value]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    navigate(`/movies/?query=${value}&page=${1}`);
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
          {movies.results.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
              </li>
            );
          })}
        </ul>
      )}
      {pageQty && (
        <Container maxWidth="md">
          <Stack spacing={2}>
            {!!pageQty && (
              <Pagination
                count={pageQty}
                page={page}
                onChange={(e, valuePage) => {
                  navigate(`/movies/?query=${paramsQuery}&page=${valuePage}`);
                }}
                sx={{ marginY: 3, marginX: 'auto' }}
              />
            )}
          </Stack>
        </Container>
      )}
    </div>
  );
}
