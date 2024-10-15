import React from "react";
import "./hotelsView.scss";
import {
  rightArrow,
  pinLocation,
  fullStar,
  fourStar,
  threeStar,
  hotel1Image,
  hotel2Image,
  hotel3Image,
  hotel4Image,
} from "../../helper/images";
import Card from "../../components/card/hotelCard/hotelCard";

const hotels = [
  {
    id: 1,
    img: hotel1Image,
    alt: "Monastero Santa Rosa Hotel & Spa",
    name: "Monastero Santa Rosa Hotel & Spa",
    location: "Salerno, Italy",
    star: fullStar,
  },
  {
    id: 2,
    img: hotel2Image,
    alt: "Grand Hotel Tremezzo",
    name: "Grand Hotel Tremezzo",
    location: "Lake Como, Italy",
    star: threeStar,
  },
  {
    id: 3,
    img: hotel3Image,
    alt: "The Oberoi Udaivilas, Udaipur",
    name: "The Oberoi Udaivilas, Udaipur",
    location: "Udaipur, India",
    star: fourStar,
  },
  {
    id: 4,
    img: hotel4Image,
    alt: "AKA Beverly Hills",
    name: "AKA Beverly Hills",
    location: "Los Angeles, United States",
    star: threeStar,
  },
];

const HotelsViews = () => {
  return (
    <section className="hotels">
      <div className="container">
        <div className="hotels__top">
          <h3 className="hotels__title">Hotels and Restaurants</h3>
          <a href="#!" className="hotels__link more">
            View all
            <img
              src={rightArrow}
              alt="rigth arrow"
              className="hotels__link-arrow"
            />
          </a>
        </div>
        <div className="hotels__cards">
          {hotels.map((item) => (
            <Card key={item.id} info={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelsViews;
