import { Link, useLocation } from 'react-router-dom';
import { Item } from './MovieListStyled';
export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </Link>
          </Item>
        );
      })}
    </ul>
  );
}
