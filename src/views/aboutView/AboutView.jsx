import React from "react";
import "./aboutView.scss";
import "./aboutView.scss";
import { aboutImg, rightArrow } from "../../helper/images";

const AboutView = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <h3 className="about__title">About Us</h3>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a sapien justo. Nulla facilisis tristique imperdiet. Nullam a
            placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit
            amet ultrices. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
          <a href="#!" className="about__link more">
            Read more
            <img src={rightArrow} alt="right arrow" className="about__link-icon" />
          </a>
        </div>
        <img src={aboutImg} alt="about img" className="about__image" />
      </div>
    </section>
  );
};

export default AboutView;
