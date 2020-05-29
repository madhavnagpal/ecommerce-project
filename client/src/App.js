import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//contexts
import { LoginProvider } from "./contexts/LoginContext";
import { ProductsProvider } from "./contexts/ProductsContext";
import { CartProvider } from "./contexts/CartContext";

//components
import MyNavbar from "./components/navigation/MyNavbar";
import Products from "./components/products/Products";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/login/Register";
import Cart from "./components/login/Cart";
import Footer from "./components/navigation/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <LoginProvider>
          <CartProvider>
            <ProductsProvider>
              <MyNavbar />
              <div className="main-content">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/products" component={Products} />
                  <Route path="/register" component={Register} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/login" component={Login} />
                </Switch>
              </div>
              <Footer />
            </ProductsProvider>
          </CartProvider>
        </LoginProvider>
      </Router>
    </div>
  );
}
