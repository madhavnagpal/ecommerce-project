import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import Products from "./components/products/Products";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Footer from "./components/Footer";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setLoginStatus] = useState(false);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Router>
      <MyNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products products={products} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
