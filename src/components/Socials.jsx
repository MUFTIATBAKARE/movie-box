import PropTypes from "prop-types";

function Socials({ text }) {
  return (
    <>
      <img src={text} className="socials_icon" />
    </>
  );
}
Socials.propTypes = {
  text: PropTypes.string,
};
export default Socials;
