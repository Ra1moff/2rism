import React from "react";
import "./activityView.scss";
import {
  rightArrow,
  sailingImg,
  climbingImg,
  skiingImg,
  hikingImg,
} from "../../helper/images";
import ActivityCard from "../../components/card/activityCard/ActivityCard";

const activity = [
    {
        id: 1,
        img: sailingImg,
        alt: "sailing",
        name: "sailing",
    },
    {
        id: 2,
        img: climbingImg,
        alt: "climbing",
        name: "climbing",
    },
    {
        id: 3,
        img: skiingImg,
        alt: "skiing",
        name: "skiing",
    },
    {
        id: 4,
        img: hikingImg,
        alt: "hiking",
        name: "hiking",
    },
]

const ActivityView = () => {
  return (
    <section className="activities">
      <div className="container">
        <div className="activities__top">
          <h2 className="activities__title">Activities</h2>
          <a href="#!" className="activities__link more">
            View all
            <img
              src={rightArrow}
              alt="right arrow"
              className="activities__link-icon"
            />
          </a>
        </div>
        <div className="activities__cards">
            {activity.map(item => (
                <ActivityCard key={item.id} info={item}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityView;
