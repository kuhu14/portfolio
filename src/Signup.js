import React from "react";

export default function Signup() {
  return (
    <div>
      Signup
      <p>
        <input type="text" placeholder="Enter Name"></input>
      </p>
      <p><input type="text" placeholder="Enter Email"></input></p>
      <p>Date of Birth:<input type="datetime-local"></input></p>
      <p>Location:<input type="radio" name="location"></input>Hyderabad<input type="radio" name="location"></input>Bengaluru</p>
      <button>Signup</button>
      <hr></hr>
      <button>Already a member? Login Here...</button>
    </div>
  );
}