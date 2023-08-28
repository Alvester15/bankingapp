/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function Pitchbar(props) {
  return (
    <div>
      <div className="card">
        <img className="pitch-image" src={props.url} alt="image" />
        <div className="pitch-bot">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
