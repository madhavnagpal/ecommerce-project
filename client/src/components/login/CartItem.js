import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CartItem({ cartItem }) {
  const [cart, setCart] = useContext(CartContext);

  const handleRemoveFromCart = (e) => {
    const newCart = cart.filter(
      (oldCartItem) => cartItem.id !== oldCartItem.id
    );
    setCart(newCart);
  };
  return (
    <div className="col-md-4 col-sm-6 text-center p-0  border rounded my-3">
      <div style={{ paddingBottom: "40px" }}>
        <img src={cartItem.avatar} width="150" height="220" alt="cartItem " />
        <p
          className="text-wrap  text-capitalize  mt-3"
          style={{ fontSize: "1.2rem" }}
        >
          {cartItem.name}
          <br />
          Price : &#8377;{cartItem.price}
          <br />
        </p>
      </div>
      <div>
        Quantity : {cartItem.quantity}
        <br />
        Total : {cartItem.quantity * cartItem.price}
      </div>
      <button
        className="btn btn-block btn-danger"
        onClick={handleRemoveFromCart}
      >
        Remove from Cart
      </button>
    </div>
  );
}
