import React from "react";
import "./navbar.css";
import Rocket from "../assets/rocketicon.svg";

// This file is currently useless

export default function Navbar() {
  return (
    <nav>
      <ul className="navbegin">
        <li>
          <h1>AstroBanking</h1>
        </li>
        <li className="icon">
          <img src={Rocket} alt="logo" />
        </li>
      </ul>

      <ul className="navcenter">
        <li>
          {/* make image home back button */}

          <a href="/">Personal</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>

        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <ul className="navend">
        <li>
          <a href="/help">Help</a>
        </li>
        <li>
          <a href="/signin">Sign in</a>
        </li>
      </ul>
    </nav>
  );
}
