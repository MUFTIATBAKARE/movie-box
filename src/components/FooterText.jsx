import PropTypes from "prop-types";

function FooterText({ body }) {
  return (
    <>
      <h6>{body}</h6>
    </>
  );
}
FooterText.propTypes = {
  body: PropTypes.string,
};
export default FooterText;
