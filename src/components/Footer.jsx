import FooterText from "./FooterText";
import Socials from "./Socials";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import Twitter from "../assets/Twitter.svg";
import Youtube from "../assets/Youtube.svg";

function Footer() {
  return (
    <div className="footer_container">
      <div className="socials_container">
        <Socials text={Facebook} />
        <Socials text={Instagram} />
        <Socials text={Twitter} />
        <Socials text={Youtube} />
      </div>
      <div className="footer_text">
        <FooterText body="Conditions of Use" />
        <FooterText body="Privacy & Policy" />
        <FooterText body="Press Room" />
      </div>
      <p>© 2021 MovieBox by Adriana Eka Prayudha </p>
    </div>
  );
}

export default Footer;
