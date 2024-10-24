import React, { useState } from "react";
import "../styles/auth.css";
import axios from "axios";
const logo = require("../assets/images/logo.png");

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) =>
        console.log(result).catch((error) => console.log(error))
      );
  };

  return (
    <div>
      <div className="parent">
        <div className="logo_left">
          <img src={logo} alt="Logo here" className="logo" />
          <div className="text">
            <div className="txt1" style={{ color: "white" }}>
              AI Powered
            </div>
            <div className="txt2" style={{ color: "yellow" }}>
              Retail Solutions
            </div>
          </div>
        </div>
        <div className="form_right">
          <div className="form">
            <h2>Login</h2>
            <form action="/home" method="post">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="submit"
                onSubmit={() => handleSubmit()}
              >
                Sign In
              </button>
              <div className="already-text">
                <p>Not Registered? <a href="/register">Sign Up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
