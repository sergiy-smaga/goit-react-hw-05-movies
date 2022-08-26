import { useEffect } from 'react';
import { getTrending, getMovieReviews } from 'service/api';

export const App = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrending();
        console.log(movies);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('show-finally');
      }
    };
    fetchMovies();
    getMovieReviews(762504).then(console.log);
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
