import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [data, setData] = useState(null);
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
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [id]);
  if (data === null) {
    // Render loading or fallback UI while data is being fetched
    return <p>Loading...</p>;
  }
  const d = new Date(data.release_date);
  const dateUTC = d.toUTCString();
  return (
    <>
      <ul>
        <li key={data.id}>
          <h3 className="movie_title" data-testid="movie-title">
            {data.title}
          </h3>
          <span className="movie_release_date" data-testid="movie-release-date">
            {dateUTC}
          </span>
          <p data-testid="movie-runtime">{data.runtime}</p>
          <p data-testid="movie-overview">{data.overview}</p>
        </li>
      </ul>
    </>
  );
}

export default MovieDetails;
