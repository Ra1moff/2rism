import React from "react";
import "./travelView.scss";
import {
  rightArrow,
  iceCream,
  brooklnyBridge,
  calendarIcon,
  userIcon,
  messageIcon,
} from "../../helper/images";
import TravelCard from "../../components/card/travelCard/TravelCard";

const travel = [
  {
    img: iceCream,
    alt: "ice-cream",
    title: "East Village Ice Cream Crawl",
    subtitle:
      "We will stop at five different world-class ice cream shops on this 1.5 mile 1.5 hour tour. At each ice cream store we'll explore the story behind the business and see what makes the ice cream unique as you savor every…",
    user: "Maria Philips",
    messages: 2,
  },
  {
    img: brooklnyBridge,
    alt: "brooklny bridge",
    title: "Brooklyn Bridge cinematic photo walk",
    subtitle:
      "This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge.",
    user: "James Calzoni",
    messages: 17,
  },
];

const TravelView = () => {
  return (
    <section className="travel">
      <div className="container">
        <div className="travel__top">
          <h2 className="travel__title">Travel Tips and Advice</h2>
          <a href="#!" className="travel__link more">
            View all
            <img
              src={rightArrow}
              alt="right arrow"
              className="travel__link-arrow"
            />
          </a>
        </div>
        <div className="travel__cards">
          {travel.map((item, index) => (
            <TravelCard key={index} info={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelView;
