import { useEffect } from "react";
import PropTypes from "prop-types";

function MovieList({ movieData }) {
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f7907e5ebe32ec036a27109e1c919b5a&sort_by=vote_count.desc"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status is ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        let rawData = [...data.results.slice(0, 10)];
        movieData(rawData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [movieData]);
}
MovieList.propTypes = {
  movieData: PropTypes.array,
};

export default MovieList;
