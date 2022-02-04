import React from "react";
import resort1 from "../assets/image/resort1.webp";

const Resortitem = (props) => {
  return (
    <div className="resort-card">
      <a href="html/resort-description.html">
        <img src={props.image} alt="" />
      </a>

      <div className="resortContent">
        <h3>{props.resort}</h3>
        <p>${props.price} per night</p>
      </div>
    </div>
  );
};

Resortitem.defaultProps = {
  image: { resort1 },
  resort: "RESORT",
  price: "PRICE",
};

export default Resortitem;
