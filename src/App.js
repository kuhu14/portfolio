import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Cart from "./Cart";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Admin from "./Admin";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navbar />
        <hr></hr>
        <Routes>
          <Route index element={<Content />} />
          <Route path="content" element={<Content />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}