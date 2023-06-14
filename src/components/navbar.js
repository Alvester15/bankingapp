import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <h1>AstroBanking</h1>
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
