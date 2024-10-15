import React from "react";
import "./travelCard.scss";
import {
    calendarIcon,
    userIcon,
    messageIcon,
  } from "../../../helper/images";

const TravelCard = ({ info }) => {
  return (
    <div className="travel__card">
      <img src={info.img} alt={info.alt} className="travel__card-image" />
      <div className="travel__card-content">
        <h3 className="travel__card-title">East Village Ice Cream Crawl</h3>
        <p className="travel__card-subtitle">
          We will stop at five different world-class ice cream shops on this 1.5
          mile 1.5 hour tour. At each ice cream store we'll explore the story
          behind the business and see what makes the ice cream unique as you
          savor every…
        </p>
        <ul className="travel__card-icons">
          <li className="travel__card-icon">
            <img
              src={calendarIcon}
              alt="calendar"
              className="travel__card-icon"
            />
            Today
          </li>
          <li className="travel__card-icon">
            <img src={userIcon} alt="user" className="travel__card-icon" />
            {info.user}
          </li>
          <li className="travel__card-icon">
            <img
              src={messageIcon}
              alt="message"
              className="travel__card-icon"
            />
            {info.messages}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TravelCard;
