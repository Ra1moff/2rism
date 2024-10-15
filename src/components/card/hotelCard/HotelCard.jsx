import React from "react";
import "./hotelCard.scss";
import { pinLocation } from "../../../helper/images";

const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <img src={info.img} alt={info.alt} className="card__img" />
      </div>
      <h3 className="card__title">{info.name}</h3>
      <div className="card__lasts">
        <div className="card__location">
          <img src={pinLocation} alt="pin icon" className="card__icon" />
          <p className="card__text">Salerno, Italy</p>
        </div>
        <img src={info.star} alt="stars" className="card__stars" />
      </div>
    </div>
  );
};

export default Card;
