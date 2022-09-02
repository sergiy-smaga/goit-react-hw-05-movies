import { useEffect, useState } from 'react';
import { searchMovie } from 'service/api';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import { Form } from './StyledMovies';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      try {
        const movies = await searchMovie(query);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        // console.log('finally');
      }
    };
    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
    e.target.reset();
  };
  return (
    <>
      <h2>Find movie by name</h2>
      <Form onSubmit={handleSubmit}>
        <input placeholder="put in movie name" name="query" type="text" />
        <button>Search</button>
      </Form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
