import React from "react";
import "./introView.scss";
import {
  introImg1,
  introImg2,
  introImg3,
  introImg4,
  introImg5,
  introImg6,
} from "../../helper/images";

const destinations = [
  {
    id: 1,
    img: introImg1,
    alt: "Big Sur",
    title: "Big Sur",
    subtitle: "California, USA",
  },
  {
    id: 2,
    img: introImg2,
    alt: "Prescott",
    title: "Prescott",
    subtitle: "Arizona, USA",
  },
  {
    id: 3,
    img: introImg3,
    alt: "Fort Mayers",
    title: "Fort Mayers",
    subtitle: "Florida, USA",
  },
  {
    id: 4,
    img: introImg4,
    alt: "Tucson",
    title: "Tucson",
    subtitle: "Arizona, USA",
  },
  {
    id: 5,
    img: introImg5,
    alt: "St. Joseph",
    title: "St. Joseph",
    subtitle: "Michigan, USA",
  },
  {
    id: 6,
    img: introImg6,
    alt: "Madrid",
    title: "Madrid",
    subtitle: "Spain",
  },
];

const IntroView = () => {
  return (
    <section className="intro">
      <div className="container">
        <h2 className="intro__title">Popular Destinations</h2>
        <div className="intro__cards">
          {destinations.map((item) => (
            <div className="intro__card" key={item.id}>
              <div className="intro__card-wrapper">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="intro__card-image"
                />
              </div>
              <h3 className="intro__card-title">{item.title}</h3>
              <p className="intro__card-subtitle">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroView;
