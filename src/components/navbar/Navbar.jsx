import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import main from "../../assets/icon-nav-home.svg";
import bookmark from "../../assets/icon-nav-bookmark.svg";
import movies from "../../assets/icon-nav-movies.svg";
import tvSeries from "../../assets/icon-nav-tv-series.svg";
import Avatar from "../avatar/Avatar";
import bookmarkActive from "../../assets/icon-nav-bookmark-active.svg";
import tvSeriesActive from "../../assets/icon-nav-tv-series-active.svg";
import moviesActive from "../../assets/icon-nav-movies-active.svg";
import mainActive from "../../assets/icon-nav-home-active.svg";
import bookmarkHover from "../../assets/icon-nav-bookmark-hover.svg";
import tvSeriesHover from "../../assets/icon-nav-tv-series-hover.svg";
import moviesHover from "../../assets/icon-nav-movies-hover.svg";
import mainHover from "../../assets/icon-nav-home-hover.svg";

import "./Navbar.css";

export default function Navbar({ parent }) {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <Link to="/">
            {parent === "mainPage" ? (
              <img src={mainActive} alt="All together icon" />
            ) : (
              <>
                <img
                  className="hover-main"
                  src={main}
                  alt="All together icon"
                />

                <img
                  className="hovered-main"
                  src={mainHover}
                  alt="All together icon"
                />
              </>
            )}
          </Link>
        </li>
        <li>
          <Link to="/movies">
            {parent === "movies" ? (
              <img src={moviesActive} alt="Movies icon" />
            ) : (
              <>
                <img className="hover-movies" src={movies} alt="Movies icon" />
                <img
                  className="hovered-movies"
                  src={moviesHover}
                  alt="Movies icon"
                />
              </>
            )}
          </Link>
        </li>
        <li>
          <Link to="/tvseries">
            {parent === "tvSeries" ? (
              <img src={tvSeriesActive} alt="TV icon" />
            ) : (
              <>
                <img className="hover-tv" src={tvSeries} alt="TV icon" />
                <img className="hovered-tv" src={tvSeriesHover} alt="TV icon" />
              </>
            )}
          </Link>
        </li>
        <li>
          <Link to="/bookmarked">
            {parent === "bookmark" ? (
              <img src={bookmarkActive} alt="Bookmark icon" />
            ) : (
              <>
                <img
                  className="hover-bookmark"
                  src={bookmark}
                  alt="Bookmark icon"
                />
                <img
                  className="hovered-bookmark"
                  src={bookmarkHover}
                  alt="Bookmark icon"
                />
              </>
            )}
          </Link>
        </li>
      </ul>
      <Avatar />
    </nav>
  );
}
