import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'service/api';
import { Suspense } from 'react';
import { StyledLink } from 'components/SharedLayout/SharedLayoutStyled';
import { Button, Container, Wrapper } from './StyledMovieDetails';

export default function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { genres, overview, vote_average, title, poster_path } = movie;

  return (
    <Container>
      <Button
        onClick={() => {
          navigate(location.state?.from ?? '/home');
        }}
      >
        Go back
      </Button>
      <Wrapper>
        <img
          width="250"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <p>User Score: {(vote_average * 10).toFixed()} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres?.reduce((acc, genre) => acc + genre.name + ' ', '')}</p>
        </div>
      </Wrapper>
      <h3>Additional information</h3>
      <Wrapper>
        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </Wrapper>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
