import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const Navigate = useNavigate()
    const handleLogin = () => {
        Navigate("/login")
    }
          return (
    <div>
      Signup
      <p>
        <input type="text" placeholder="Enter Name"></input>
      </p>
      <p><input type="text" placeholder="Enter Email"></input></p>
      <p>Date of Birth:<input type="datetime-local"></input></p>
      <p>Location:<input type="radio" name="location"></input>Hyderabad<input type="radio" name="location"></input>Delhi</p>
      <button>Signup</button>
      <hr></hr>
      <p>Already a member?</p>
      <button onClick={handleLogin}>Login Here</button>
    </div>
  );
}