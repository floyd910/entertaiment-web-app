import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookmarked from "../screens/bookmarked/Bookmarked";
import MainPage from "../screens/mainPage/MainPage";
import Movies from "../screens/movies/Movies";
import TvSeries from "../screens/tvShows/TvSeries";

function RoutePages({
  streams,
  bookmarkStream,
  movies,
  tvSeries,
  bookmarkedMovies,
  bookmarkedSeries,
  bookmarkedAll
}) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage streams={streams} bookmarkStream={bookmarkStream} />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies streams={movies} bookmarkStream={bookmarkStream} />
            }
          />
          <Route
            path="/tvseries"
            element={
              <TvSeries streams={tvSeries} bookmarkStream={bookmarkStream} />
            }
          />
          <Route
            path="/bookmarked"
            element={
              <Bookmarked
                bookmarkedMovies={bookmarkedMovies}
                bookmarkedSeries={bookmarkedSeries}
                bookmarkedAll={bookmarkedAll}
                bookmarkStream={bookmarkStream}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePages;
