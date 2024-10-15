import React from "react";
import "./header.scss";
import {
  navLogo,
  navUser,
  headerImage,
  headerLocation,
  headerBicycle,
  headerCalendar,
  headerGuess,
  headerSearch,
} from "../../helper/images";

const navList = [
  {
    name: "home",
    path: "#!",
  },
  {
    name: "hotels",
    path: "#!",
  },
  {
    name: "restaurants",
    path: "#!",
  },
  {
    name: "tours",
    path: "#!",
  },
  {
    name: "destinations",
    path: "#!",
  },
  {
    name: "activities",
    path: "#!",
  },
  {
    name: "contact",
    path: "#!",
  },
];

const Header = () => {
  return (
    <header className="header">
      <img src={headerImage} alt="" className="header__image" />
      <nav className="nav">
        <div className="container">
          <a href="#!">
            <img src={navLogo} alt="nav logo" className="nav__logo" />
          </a>
          <div className="nav__menu">
            <ul className="nav__list">
              {navList.map((item, index) => (
                <li className="nav__item" key={index}>
                  <a href={item.path} className="nav__link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__user-wrapper">
            <div className="nav__user">
              <div className="nav__user-texts">
                <p className="nav__user-txt">Holla,</p>
                <p className="nav__user-name">Ales Nesetril</p>
              </div>
              <img src={navUser} alt="" className="nav__user-image" />
            </div>
            <div className="nav__burger">
              <span className="nav__burger-line"></span>
            </div>
          </div>
        </div>
      </nav>
      <h3 className="header__title">Discover the most engaging places</h3>
      <div className="header__button">
        <a href="#!" className="header__link">
          Discover on 3D Globe
        </a>
      </div>
      <div className="header__contents">
        <div className="header__content">
          <img
            src={headerLocation}
            alt="header icon"
            className="header__content-icon"
          />
          <div className="header__content-texts">
            <div className="header__content-location">Location</div>
            <div className="header__content-text">
              Explore nearby destinations
            </div>
          </div>
        </div>
        <div className="header__content">
          <img
            src={headerBicycle}
            alt="header icon"
            className="header__content-icon"
          />
          <div className="header__content-texts">
            <div className="header__content-location">Activity</div>
            <div className="header__content-text">All Activities</div>
          </div>
        </div>
        <div className="header__content">
          <img
            src={headerCalendar}
            alt="header icon"
            className="header__content-icon"
          />
          <div className="header__content-texts">
            <div className="header__content-location">When</div>
            <div className="header__content-text">Choose a Date</div>
          </div>
        </div>
        <div className="header__content">
          <img
            src={headerGuess}
            alt="header icon"
            className="header__content-icon"
          />
          <div className="header__content-texts">
            <div className="header__content-location">Guests</div>
            <div className="header__content-text">1 guest</div>
          </div>
        </div>
        <button className="header__contents-btn">
          <img src={headerSearch} className="search__icon" alt="search icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
