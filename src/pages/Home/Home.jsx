import { useEffect, useState } from 'react';
import { getTrending } from 'service/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrending();
        setMovies(movies);
        console.log(movies);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    };
    fetchMovies();
  }, []);

  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>;
          </li>
        );
      })}
    </ul>
  );
}
