import { useState, useEffect } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import * as api from '../../api/api-service';
import { NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  //   const { pathname } = useLocation();
  const id = useParams().movieId;
  useEffect(() => {
    api.getDetailsMovie(id).then(setMovie);
  }, [id]);

  return (
    movie && (
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
          alt={id}
          width="300"
        ></img>

        <h2>{movie.title}</h2>
        <p>popularity: {movie.popularity}</p>
        <p>{movie.overview}</p>
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
        </ul>
        <div>
          <ul>
            <li>
              <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/cast" element={<Cast id={id} />}></Route>
          <Route path="/reviews" element={<Reviews id={id} />}></Route>
        </Routes>
      </div>
    )
  );
}
