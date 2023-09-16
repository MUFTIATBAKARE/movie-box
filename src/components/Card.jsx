import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ filteredMovies }) {
  return (
    <>
      <ul className="card_list">
        {filteredMovies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`} className="movie-text">
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                  className="movie_poster"
                  data-testid="movie-poster"
                />
                <h3 className="movie_title" data-testid="movie-title">
                  {movie.title}
                </h3>
                <span
                  className="movie_release_date"
                  data-testid="movie-release-date"
                >
                  {movie.release_date}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
Card.propTypes = {
  filteredMovies: PropTypes.object,
};

export default Card;
