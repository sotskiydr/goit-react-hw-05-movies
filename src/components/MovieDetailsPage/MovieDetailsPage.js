import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import * as api from '../../api/api-service';
import styles from './MovieDetailsPage.module.scss';

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
    const { paramsP, paramsQ } = api.getParams();
    paramsQ
      ? navigate(`/movies/?query=${paramsQ}&page=${paramsP}`)
      : navigate('/');
  }

  return (
    movie && (
      <div>
        <button
          className={styles.btn}
          type="button"
          onClick={e => {
            handleBack(e);
          }}
        >
          go back
        </button>
        <div className={styles.description}>
          <div className={styles.movie}>
            {movie.poster_path ? (
              <img
                src={`https://www.themoviedb.org/t/p/w500${movie.poster_path}`}
                alt={id}
                width="300"
              ></img>
            ) : (
              <img src="/noPhoto.jpg" alt={id} width="300"></img>
            )}
          </div>
          <div className={styles.movieDescription}>
            <h2>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h2>
            <p>User Score: {movie.vote_average * 10}%</p>
            <h2 className={styles.title}>Overview</h2>
            <p>{movie.overview}</p>
            <div className={styles.genres}>
              <h2 className={styles.title}>Genres: </h2>
              <ul className={styles.genresList}>
                {movie.genres.map(genre => {
                  return (
                    <li className={styles.genresItem} key={genre.id}>
                      {genre.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Suspense fallback={<p>Загрузка...</p>}>
            <ul className={styles.btnList}>
              <li className={styles.btnItem}>
                <NavLink
                  className={navData =>
                    navData.isActive ? styles.activeBtn : styles.btn
                  }
                  to={`/movies/${id}/cast`}
                >
                  Cast
                </NavLink>
              </li>
              <li className={styles.btnItem}>
                <NavLink
                  className={navData =>
                    navData.isActive ? styles.activeBtn : styles.btn
                  }
                  to={`/movies/${id}/reviews`}
                >
                  Reviews
                </NavLink>
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
