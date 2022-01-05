import * as api from '../../api/api-service';
import styles from './MoviesPage.module.scss';
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
    <div className={styles.page}>
      <form
        className={styles.form}
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <button
          className={styles.GoBackBtn}
          type="button"
          onClick={e => {
            handleBack(e);
          }}
        >
          go back
        </button>
        <input
          placeholder={paramsQuery ? paramsQuery : 'Please enter your query'}
          className={styles.input}
          onChange={e => {
            handleChangeValue(e);
          }}
        />
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
      {movies && (
        <ul className={styles.list}>
          {movies.results.map(movie => {
            return (
              <li className={styles.item} key={movie.id}>
                <NavLink className={styles.link} to={`/movies/${movie.id}`}>
                  {movie.poster_path ? (
                    <img
                      className={styles.img}
                      src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.id}
                    ></img>
                  ) : (
                    <img
                      className={styles.img}
                      src="/noSignal.jpg"
                      alt={movie.id}
                    ></img>
                  )}
                  <p className={styles.title}>{movie.title}</p>
                </NavLink>
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
                  window.scrollTo({
                    top: 80,
                    behavior: 'smooth',
                  });
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
