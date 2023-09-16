import TMDBIcon from "../assets/TMDB.svg";
import TomatoIcon from "../assets/Tomato.svg";
import Play from "../assets/Play.svg";

function HeroText() {
  return (
    <div className="hero_text_container">
      <h2>John Wick 3 : Parabellum</h2>
      <div className="hero_text_content">
        <span>
          <img src={TMDBIcon} className="hero_icon" />
          <p>86.0/100</p>
        </span>
        <span>
          <img src={TomatoIcon} className="hero_icon" />
          <p>97%</p>
        </span>
      </div>
      <p className="hero_text">
        John Wick is on the run after killing a member of the international
        assassins guild, and with a $14 million price tag on his head, he is the
        target of hit men and women everywhere.
      </p>
      <button className="hero_btn">
        <img src={Play} className="hero_icon" />
        <h3>WATCH TRAILER</h3>
      </button>
    </div>
  );
}

export default HeroText;
