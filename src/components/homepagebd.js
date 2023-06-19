import React from "react";
import "./homepagebd.css";

export default function Homepagebd() {
  return (
    <div className="container">
      <div className="catch">
        <h1>Banking Made Astronomically Easier</h1>
      </div>
      <span>
        <h2>PERKS OF BANKING WITH US</h2>
      </span>
      <span className="Perkchart">
        <ul>
          <li className="Interest">Interest Rate</li>
          <li className="Sec">Security</li>
          <li className="Solution">Personalized Solution</li>
        </ul>
      </span>
    </div>
  );
}
