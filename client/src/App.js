import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Products from "./components/Products";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <MyNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
