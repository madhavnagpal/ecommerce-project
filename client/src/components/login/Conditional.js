import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Conditional({ loggedInStatus }) {
  if (loggedInStatus.isLoggedIn) {
    return (
      <li className="nav-item">
        <StyledLink to="/logout">Logout</StyledLink>
      </li>
    );
  } else {
    return (
      <>
        <li className="nav-item">
          <StyledLink to="/register">Register</StyledLink>
        </li>
        <li className="nav-item">
          <StyledLink to="/login">Login</StyledLink>
        </li>
      </>
    );
  }
}

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
