import { NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'service/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
        console.log(movie);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    };
    fetchMovies();
  }, [movieId]);

  //   const genresToString = () => {
  //     return movie.genres.length !== 0
  //       ? movie.genres.reduce((acc, genre) => acc + genre.name + ' ', '')
  //       : 'Genres not found';
  //   };

  return (
    <main>
      <button onClick={navigate(-1)}>Go back</button>
      <div>
        <img
          width="200"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>User Score</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>
            {/* {movie.genres.reduce((acc, genre) => acc + genre.name + ' ', '')} */}
          </p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </main>
  );
}
