import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { NLink } from '../SharedLayout.style/SharedLayout.style';
import css from '../SharedLayout/SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.container}>
          <nav className={css.navigation}>
            <NLink to="/" end>
              Home
            </NLink>
            <NLink to="/movies">Movies</NLink>
          </nav>
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <footer className={css.footer}>
        <div className={css.footerContainer}>
          <a href="https://developer.themoviedb.org/docs/getting-started"></a>
          <p>
            This website uses TMDB and the TMDB APIs but is not endorsed,
            certified, or otherwise approved by TMDB.
          </p>
        </div>
      </footer>
    </div>
  );
};