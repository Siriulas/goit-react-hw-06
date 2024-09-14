import { useParams, useNavigate, useLocation, Outlet, Link } from 'react-router-dom'; // Додано Outlet і Link
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../components/TBDM-API/TBDM-API';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.goBackButton}>Go back</button>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
          
          <div className={styles.additionalInfo}>
            <h2>Additional Information</h2>
            <ul>
              <li>
                <Link to="cast" className={styles.addInfoLink} state={{ from: location.state?.from }}>Cast</Link>
              </li>
              <li>
                <Link to="reviews" className={styles.addInfoLink} state={{ from: location.state?.from }}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
