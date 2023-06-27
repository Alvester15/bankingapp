import React from "react";
import "./homepagebd.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pitchbar from "./pitchbar";
import { pitchData, responsive } from "./pitchdata";

const pitch = pitchData.map((item) => (
  <Pitchbar
    name={item.name}
    url={item.imageurl}
    description={item.description}
  />
));

export default function Homepagebd() {
  return (
    <div className="container">
      <div className="catch">
        <h1>Banking Made Astronomically Easier</h1>
      </div>
      <div className="container-perks">
        <span>
          <h2>PERKS OF BANKING WITH US</h2>
        </span>
        <span className="Perkchart">
          <Carousel responsive={responsive}>{pitch}</Carousel>
        </span>
      </div>
    </div>
  );
}
