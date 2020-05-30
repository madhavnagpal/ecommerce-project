import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "../../contexts/LoginContext";
import { CartContext } from "../../contexts/CartContext";
import styled from "styled-components";

export default function MyNavbar() {
  const [loggedInStatus, setLoginStatus] = useContext(LoginContext);
  const [cart, setCart] = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    let localLoginStatus = JSON.parse(localStorage.getItem("loggedIn"));
    if (localLoginStatus) {
      setLoginStatus(localLoginStatus);
    }
    let storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
    console.log("im in useeffect all");
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("im in useeffect cart");
  }, [cart.length]);

  useEffect(() => {
    localStorage.setItem("loggedIn", JSON.stringify(loggedInStatus));
  }, [loggedInStatus]);

  function handleLogout(e) {
    setLoginStatus({
      isLoggedIn: false,
      name: "Guest",
    });
    localStorage.setItem("loggedIn", null);
    history.push("/login");
  }

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

        {loggedInStatus.isLoggedIn ? (
          <span>
            <StyledLink to="/cart">
              <i className="fas fa-shopping-cart mr-2"></i>Cart
            </StyledLink>
            <StyledLogoutButton onClick={handleLogout}>
              <i className="fas fa-power-off mr-2"></i>Logout
            </StyledLogoutButton>
          </span>
        ) : (
          <span>
            <StyledLink to="/register">
              <i className="fas fa-user-plus mr-2"></i>Register
            </StyledLink>
            <StyledLink to="/login">
              <i className="fas fa-sign-in-alt mr-2"></i>Login
            </StyledLink>
          </span>
        )}
      </div>
    </div>
  );
}

const navbarStyle = {
  backgroundImage: "linear-gradient(90deg,#120136,#035aa6",
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
const StyledLogoutButton = styled.span`
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
