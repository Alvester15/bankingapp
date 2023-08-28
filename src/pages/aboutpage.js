import React from "react";
import "../components/about.css";
import walkingwoman from "../assets/robert-bye-jeF-vyxytb4-unsplash.jpg";

export default function Aboutpage() {
  return (
    <div className="A-header">
      <h1>About</h1>
      <div className="desc-1">
        <p>
          <h1>At Astrobanking,</h1> We believe that stellar customer service is
          the cornerstone of any intergalactic financial institution. Our
          dedicated team of astrobanks stands ready to provide you with
          personalized attention and expert guidance, making sure your financial
          journey is smooth and celestial. We are committed to fostering
          long-lasting relationships built on trust, integrity, and stellar
          results.
        </p>
        <img src={walkingwoman} alt="Photo" />
      </div>
    </div>
  );
}
