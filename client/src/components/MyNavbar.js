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
  color: "white",
  zIndex: "3",
  backgroundColor: "rgb(0, 0, 255)",
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
