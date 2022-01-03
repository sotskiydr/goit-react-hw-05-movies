// import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import HomePage from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage'),
);

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>download</div>}>
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
