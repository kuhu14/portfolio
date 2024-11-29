import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/content">Home</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
}