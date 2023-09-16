import ColoredLogo from "../assets/Logo.svg";

function Logo() {
  return (
    <div className="logo_container">
      <img src={ColoredLogo} className="logo" />
    </div>
  );
}

export default Logo;
