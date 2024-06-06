import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';

const Home = lazy(() => import('../components/Home/Home'));
const Movies = lazy(() => import('../components/Movies/Movies'));
const MovieDetails = lazy(() => import('../components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));

export const App = () => {
  const handleFetching = async api => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzMxZDk4NWMwNzA1ZDRjZWM4MjRmZjE1YzEyNTAwYSIsInN1YiI6IjY1ZTg0MWVjM2ZlMTYwMDE2MjVjZTAzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HPQhM5yRj3vRPDY3tSFgGEmeCi69HNN3M4_g94gH5c',
      },
    };

    try {
      const response = await fetch(api, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home handleFetching={handleFetching} />} />
        <Route
          path="/movies"
          element={<Movies handleFetching={handleFetching} />}
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails handleFetching={handleFetching} />}
        >
          <Route
            path="cast"
            element={<Cast handleFetching={handleFetching} />}
          />
          <Route
            path="reviews"
            element={<Reviews handleFetching={handleFetching} />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};