import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function MovieList({ movieData }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        let rawData = [...data.results.slice(0, 10)];
        movieData(rawData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [movieData]);
  MovieList.propTypes = {
    movieData: PropTypes.array,
  };
  return (
    <>
      {loading && <div className="loader"></div>}
      {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
    </>
  );
}

export default MovieList;
