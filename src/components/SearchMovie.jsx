import PropTypes from "prop-types";

function SearchMovie(props) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by title..."
        value={props.thisMovie}
        onChange={(event) => {
          props.setThisMovie(event.target.value);
        }}
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
