import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, StyledLink, Header } from './SharedLayoutStyled';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
