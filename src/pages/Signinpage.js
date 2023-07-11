import React from "react";
import "../components/signin.css";
import { Link } from "react-router-dom";

export default function Signinpage() {
  return (
    <div className="signin-image">
      <div className="signin-container">
        <h1>Sign In</h1>
        <p>Email</p>
        <input
          name="Email"
          placeholder="Email"
          type="email"
          autoComplete="false"
        />

        <p>Password</p>
        <input name="Password" type="password" placeholder="Password" />
        <button>Sign in</button>
        <Link to="/forgot">Forgot Username/Password</Link>
      </div>
    </div>
  );
}
