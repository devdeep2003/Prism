import React, { useState } from "react";
import "../styles/auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const logo = require("../assets/images/logo.png");

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    navigate("/");
  }
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
            <h2>Sign Up</h2>
            <form>
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="password"
                  placeholder="********"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <button type="submit" className="submit" onSubmit={()=>handleSubmit()}>
                Sign up
              </button>
              <div className="already-text">
                <p>
                  Already Signed up? <a href="/">Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
