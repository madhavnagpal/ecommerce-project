import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Conditional from "../login/Conditional";

export default function MyNavbar({ loggedInStatus }) {
  return (
    <div className="p-2 my-navbar" style={navbarStyle}>
      <div className="text-center" style={headingStyle}>
        <i className="fab fa-react mr-2"></i> E-Commerce Product
      </div>
      <div className="text-center">
        <StyledLink to="/">
          <i className="fas fa-home mr-2"></i>Home
        </StyledLink>
        <StyledLink to="/products">
          <i className="fas fa-store mr-2"></i>Products
        </StyledLink>
        <StyledLink to="/register">
          <i className="fas fa-user-plus mr-2"></i>Register
        </StyledLink>
        <StyledLink to="/login">
          <i className="fas fa-sign-in-alt mr-2"></i>Login
        </StyledLink>
        <Conditional loggedInStatus={loggedInStatus} />
      </div>
    </div>
  );
}

const navbarStyle = {
  backgroundColor: "rgb(0,0,120)",
  zIndex: "3",
  color: "white",
};
const headingStyle = {
  fontSize: "1.5rem",
  fontWeight: "900",
  padding: "5px 50px",
};

const StyledLink = styled(Link)`
  color: white;
  display: inline-block;
  width: 120px;
  text-align: center;
  margin: 0em;
  padding: 5px;
  &:hover {
    text-decoration: none;
    background-color: blue;
    color: white;
  }
  &:active {
    color: coral;
  }
`;
