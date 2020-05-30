import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/LoginContext";
import { CartContext } from "../../contexts/CartContext";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart() {
  const [loggedInStatus, setLoginStatus] = useContext(LoginContext);
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  useEffect(() => {
    let dummyCart = [...cart];
    let newTotalPrice = dummyCart.reduce(
      (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cart]);

  if (loggedInStatus.isLoggedIn) {
    return (
      <div className="container my-3 border border-primary  rounded">
        <h4 className="text-center text-capitalize">
          Welcome {loggedInStatus.name} !
        </h4>
        <h4 className="text-center">Total Price : &#8377;{totalPrice}</h4>
        <div className="row">
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
