import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Products from "./components/products/Products";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/login/Register";
import Logout from "./components/login/Logout";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loggedInStatus, setLoginStatus] = useState({
    isLoggedIn: false,
    name: "Guest",
  });

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="bigBox">
      <div className="smallBox">
        <Router>
          <MyNavbar loggedInStatus={loggedInStatus} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products products={products} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="footer">
        You Can Contact me via mr.madhavnagpal@gmail.com
      </div>
    </div>
  );
}
