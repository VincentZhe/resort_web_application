import React from "react";
import Resortitem from "./ResortItem";
import resort1 from "../assets/image/resort1.webp";
import resort2 from "../assets/image/resort2.webp";
import resort3 from "../assets/image/resort3.webp";
import resort4 from "../assets/image/resort4.webp";

const ResortList = () => {
  return (
    <section id="section-resort-list">
      <div className="container">
        <h1>Featured Resort</h1>

        <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          <Resortitem image={resort1} resort="resort 1" price="70.00" />
          <Resortitem image={resort2} resort="resort 2" price="80.00" />
          <Resortitem image={resort3} resort="resort 3" price="90.00" />
          <Resortitem image={resort4} resort="resort 4" price="100.00" />
        </div>
      </div>
    </section>
  );
};

export default ResortList;
