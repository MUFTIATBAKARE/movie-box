import Hamburger from "../assets/Menu.svg";

function Navbar() {
  return (
    <div className="menu_container">
      <h4>Sign in </h4>
      <img src={Hamburger} className="menu" />
    </div>
  );
}

export default Navbar;
