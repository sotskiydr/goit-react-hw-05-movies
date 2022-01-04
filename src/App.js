import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage'),
);

export default function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress color="success" />
          </Stack>
        }
      >
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MovieDetailsPage />}
          ></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
