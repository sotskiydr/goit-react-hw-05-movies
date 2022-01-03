import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import * as api from '../../api/api-service';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const id = useParams().movieId;
  useEffect(() => {
    api.getDetailsMovie(id).then(setMovie);
  }, [id]);

  function handleBack(e) {
    const query = api.getQuery();
    query ? navigate(`/movies/?query=${query}`) : navigate('/');
  }

  return (
    movie && (
      <div>
        <button
          type="button"
          onClick={e => {
            handleBack(e);
          }}
        >
          go back
        </button>
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
          <Suspense fallback={<p>Загрузка...</p>}>
            <ul>
              <li>
                <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </Suspense>
        </div>
        <Routes>
          <Route path="/cast" element={<Cast id={id} />}></Route>
          <Route path="/reviews" element={<Reviews id={id} />}></Route>
        </Routes>
      </div>
    )
  );
}
