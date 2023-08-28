import React from "react";
import "./homepagebd.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Pitchbar from "./pitchbar";
import { pitchData, responsive } from "./pitchdata";
import { Link } from "react-router-dom";

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
        <h1>Welcome to Banking Made Astronomically Easier</h1>
      </div>
      <div className="banner-body">
        <div className="banner-box">
          <p>
            <h2>We</h2> handle your finances! <h2> You</h2> enjoy your life!
          </p>
          <div className="banner-buttons">
            <Link to="/create">
              <button>Create An Account</button>
            </Link>
            <Link to="/signin">
              <button>Sign In</button>
            </Link>
            <Link to="/forgot">
              <p>Forgot Username/password</p>
            </Link>
          </div>
        </div>
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
