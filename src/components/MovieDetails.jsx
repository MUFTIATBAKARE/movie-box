import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f7907e5ebe32ec036a27109e1c919b5a`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Status is ${response.status}`);
        }
        return response.json();
      })
      .then((rawData) => {
        console.log(rawData);
        setData(rawData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);
  if (data === null) {
    return <p>Loading...</p>;
  }
  const d = new Date(data.release_date);
  const dateUTC = d.toUTCString();
  const containerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="movie-details-container" style={containerStyle}>
      {loading && <div className="loader"></div>}
      {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
      <ul className="card_details">
        <li key={data.id}>
          <h3 className="movie_title" data-testid="movie-title">
            {data.title}
          </h3>
          <span className="movie_release_date" data-testid="movie-release-date">
            {dateUTC}
          </span>
          <p data-testid="movie-runtime">{data.runtime}</p>
          <p data-testid="movie-overview" className="details-overview">
            {data.overview}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default MovieDetails;
