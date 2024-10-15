import React from "react";
import "./activityCard.scss";

const ActivityCard = ({ info }) => {
  return (
    <div className="activities__card">
      <div className="activities__card-wrapper">
        <img src={info.img} alt={info.alt} className="activities__card-image" />
      </div>
      <p className="activities__card-text">{info.name}</p>
    </div>
  );
};

export default ActivityCard;
