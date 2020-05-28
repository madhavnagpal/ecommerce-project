import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Conditional({ loggedInStatus }) {
  if (loggedInStatus.isLoggedIn) {
    return (
      <li className="d-inline py-2 px-1">
        <StyledLink to="/cart">
          <i className="fas fa-shopping-cart"></i>Cart
        </StyledLink>
      </li>
    );
  } else {
    return <></>;
  }
}

const StyledLink = styled(Link)`
  color: white;
  display: inline;
  margin: 0.5em 0.5em;
  font-family: Helvetica, Arial, sans-serif;
  opacity: 1;

  &:hover {
    text-decoration: none;
    color: aqua;
  }
  &:active {
    color: red;
  }
`;
