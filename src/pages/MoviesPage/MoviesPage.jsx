import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchMovies } from '../../components/TBDM-API/TBDM-API';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css'

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setSearchParams({ query });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <input className={styles.input} name="query" type="text" defaultValue={query} />
        <button className={styles.button} type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
