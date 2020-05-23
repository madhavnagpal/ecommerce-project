import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={gradStyle}>
      <h4 className="my-2 ml-4">E-Commerce Product</h4>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav text-center ml-auto">
          <li className="nav-item ">
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li className="nav-item">
            <StyledLink to="/login">Login</StyledLink>
          </li>
          <li className="nav-item">
            <StyledLink to="/products">Products</StyledLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
const gradStyle = {
  // backgroundImage: "linear-gradient(90deg,,#00a1ab)",
  color: "white",
  zIndex: "3",
  background: "rgb(2,0,36)",
  background:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,3,67,1) 13%, rgba(8,7,106,1) 29%, rgba(9,9,121,1) 35%, rgba(8,25,131,1) 40%, rgba(7,59,154,1) 51%, rgba(6,81,168,1) 58%, rgba(5,106,185,1) 66%, rgba(3,140,208,1) 77%, rgba(2,168,226,1) 86%, rgba(1,199,247,1) 96%, rgba(0,212,255,1) 100%)",
};

const StyledLink = styled(Link)`
  color: white;
  display: block;
  margin: 0.5em 0.5em;
  font-family: Helvetica, Arial, sans-serif;
  opacity: 1;

  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
  }
  &:active {
    color: #c10;
  }
`;
