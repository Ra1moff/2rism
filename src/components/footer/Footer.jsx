import React from "react";
import "./footer.scss";
import { footerLogo, ftrArrowRight, mailIcon } from "../../helper/images";
import { facebook, twitter, instagram } from "../../helper/icones";

const footerLists = [
  {
    id: 1,
    title: "About",
    link1: "About Us",
    link2: "Features",
    link3: "News",
    link4: "Menu",
  },
  {
    id: 2,
    title: "Company",
    link1: "Why 2rism",
    link2: "Partner With Us",
    link3: "FAQ",
    link4: "Blog",
  },
  {
    id: 3,
    title: "Support",
    link1: "Account",
    link2: "Support Center",
    link3: "Feedback",
    link4: "Contact Us",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cards">
          <div className="footer__card">
            <a href="#!">
              <img
                src={footerLogo}
                alt="footer logo"
                className="footer__card-logo"
              />
            </a>
            <p className="footer__card-text">
              We always make our customers happy by providing as many choises as
              possible
            </p>
            <ul className="footer__card-icons">
              <li className="footer__card-icon">
                <a href="#!" className="footer__card-link">
                  {facebook()}
                </a>
              </li>
              <li className="footer__card-icon">
                <a href="#!" className="footer__card-link">
                  {twitter()}
                </a>
              </li>
              <li className="footer__card-icon">
                <a href="#!" className="footer__card-link">
                  {instagram()}
                </a>
              </li>
            </ul>
          </div>
          {footerLists.map((item) => (
            <div className="footer__info" key={item.id}>
              <h3 className="footer__info-title">{item.title}</h3>
              <ul className="footer__info-list">
                <li className="footer__info-item">
                  <a href="#!" className="footer__info-link">
                    {item.link1}
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__info-link">
                    {item.link2}
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__info-link">
                    {item.link3}
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#!" className="footer__info-link">
                    {item.link4}
                  </a>
                </li>
              </ul>
            </div>
          ))}
          <div className="footer__email">
            <h3 className="footer__email-title">
              Subscribe on our destination review newsletters
            </h3>
            <div className="footer__form">
              <div className="footer__form-wrapper">
                <img
                  src={mailIcon}
                  alt="mail icon"
                  className="footer__form-icon"
                />
                <input type="email" className="footer__form-input" required />
                <span className="footer__form-text">Your Email</span>
              </div>
              <button className="footer__form-btn">
                <img src={ftrArrowRight} alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
