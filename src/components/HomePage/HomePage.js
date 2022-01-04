import { useState, useEffect } from 'react';
import { Container, Pagination, Stack } from '@mui/material';
import * as api from '../../api/api-service';
import MoviesList from '../MoviesList/MoviesList';
import styles from './HomePage.module.scss';
export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(1);

  useEffect(() => {
    api.getTrandingMovie(page).then(data => {
      setMovies(data);
      setPage(data.page);
      setPageQty(data.total_pages);
    });
  }, [page]);

  return (
    <>
      {movies && (
        <ul className={styles.list}>
          <MoviesList dataMovies={movies.results} />
        </ul>
      )}
      <Container maxWidth="md">
        <Stack spacing={2}>
          {!!pageQty && (
            <Pagination
              count={pageQty}
              page={page}
              onChange={(e, value) => {
                setPage(value);
              }}
              sx={{ marginY: 3, marginX: 'auto' }}
            />
          )}
        </Stack>
      </Container>
    </>
  );
}
