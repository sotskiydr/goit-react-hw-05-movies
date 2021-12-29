// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

// import api from './api/api-service';
// const data = new api();
// data.getTrandingMovie().then(data => console.log(data.results));
// data.getQueryMovie('sex').then(data => console.log(data.results));
// data.getDetailsMovie(5).then(data => console.log(data));
// data.getCreditsMovie(5).then(data => console.log(data));
// data.getReviewsMovie(5).then(data => console.log(data));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
