import { useState } from "react";
import SearchMovie from "../components/SearchMovie";
import Card from "../components/Card";
import MovieList from "../components/MovieList";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import HeroText from "../components/HeroText";
import Footer from "../components/Footer";

function Homepage() {
  const [data, setData] = useState([]);
  const [thisMovie, setThisMovie] = useState("");

  const handleData = (data) => {
    if (data) {
      setData(data);
    }
  };

  const filteredMovies = data.filter((movie) => {
    return movie.title.toLowerCase().includes(thisMovie.toLowerCase());
  });
  return (
    <>
      <div className="hero_container">
        <div className="nav_bar_container">
          <Logo />
          <SearchMovie thisMovie={thisMovie} setThisMovie={setThisMovie} />
          <Navbar />
        </div>
        <HeroText />
      </div>
      <MovieList movieData={handleData} />
      <Card
        className="movie_card"
        data-testid="movie-card"
        filteredMovies={filteredMovies}
      />
      <Footer />
    </>
  );
}
export default Homepage;
