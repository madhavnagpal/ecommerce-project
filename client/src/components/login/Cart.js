import React, { useContext, useEffect } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CartContext } from "../../contexts/CartContext";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart() {
  const [loggedInStatus, setLoginStatus] = useContext(LoginContext);
  const [cart, setCart] = useContext(CartContext);
  const history = useHistory();

  if (loggedInStatus.isLoggedIn) {
    return (
      <div className="container my-3 border border-primary  rounded">
        <h3 className="text-capitalize">Welcome {loggedInStatus.name} !</h3>
        <div className="">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
      </div>
    );
  } else {
    history.push("/login");
    return <></>;
  }
}
