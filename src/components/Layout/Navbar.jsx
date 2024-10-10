import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.png";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <HiMiniBars3BottomLeft
        className="hamburger"
        onClick={() => {
          setView(!view);
        }}
      />
      <ul className="listdesk">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact us</Link>
        </li>
      </ul>
      {view
        ? <ul className="list">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About us</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact us</Link>
            </li>
          </ul>
        : null}
    </div>
  );
};

export default Navbar;
