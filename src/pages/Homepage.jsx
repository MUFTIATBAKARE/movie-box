import { useState } from "react";
import SearchMovie from "../components/SearchMovie";
import Card from "../components/Card";
import MovieList from "../components/MovieList";

function Homepage() {
  const [data, setData] = useState([]);
  const [thisMovie, setThisMovie] = useState("");

  const handleData = (data) => {
    if (data) {
      setData(data);
      console.log(data);
    }
  };

  const filteredMovies = data.filter((movie) => {
    return movie.title.toLowerCase().includes(thisMovie.toLowerCase());
  });
  return (
    <>
      <SearchMovie thisMovie={thisMovie} setThisMovie={setThisMovie} />
      <MovieList movieData={handleData} />
      <Card
        className="movie_card"
        data-testid="movie-card"
        filteredMovies={filteredMovies}
      />
    </>
  );
}
export default Homepage;
