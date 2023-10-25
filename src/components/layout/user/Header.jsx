import { Link } from "react-router-dom";

import "./Header.scss";
import useScreenSize from "../../../utils/screenSize";
import notification from "../../../assets/bell.png";
import message from "../../../assets/conversation.png";
import light from "../../../assets/light.png";

const Header = () => {
  const screenSize = useScreenSize();
  return (
    <header>
      <nav className="nav">
        <div className="container nav__container">
          <Link to="/" className="nav__logo">
            {screenSize > 450 ? "MPortfolio" : "MP"}
          </Link>
          <ul className="nav__menu">
            <li className="nav__item">
              <Link className="nav__btn">
                <img src={notification} alt="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__btn">
                <img src={message} alt="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__btn">
                <img src={light} alt="" />
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/register">
                Sign Up
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/login">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
