import PropTypes from "prop-types";

function SearchMovie(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="What do you want to search?"
        value={props.thisMovie}
        onChange={(event) => {
          props.setThisMovie(event.target.value);
        }}
        className="search-box"
      />
    </div>
  );
}
SearchMovie.propTypes = {
  thisMovie: PropTypes.func,
  setThisMovie: PropTypes.string,
  key: PropTypes.string,
};
export default SearchMovie;
