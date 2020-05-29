import React, { useState, useContext, useEffect } from "react";
import Message from "../login/Message";
import { CartContext } from "../../contexts/CartContext";

export default function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    let storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  function handleAddToCart(e) {
    let itemFound = cart.find((cartItem) => cartItem.id == product.id);
    if (itemFound) {
      setMessage("Item Already in Your Cart");
    } else {
      let newCartItem = {
        ...product,
        quantity,
      };
      setCart((oldCart) => [...oldCart, newCartItem]);
      setMessage("Item Added To Your Cart");
    }
  }
  return (
    <div className="col-md-4 col-sm-6 text-center p-0  border rounded my-3">
      <Message message={message} />
      <div style={{ paddingBottom: "120px" }}>
        <img src={product.avatar} width="150" height="220" alt="product " />
        <p
          className="text-wrap  text-capitalize  mt-3"
          style={{ fontSize: "1.2rem" }}
        >
          {product.name}
          <br />
          Price : &#8377;{product.price}
          <br />
        </p>
        <div style={quantityBoxStyle}>
          Quantity
          <input
            type="number"
            min="1"
            style={quantityStyle}
            onChange={handleQuantityChange}
            value={quantity}
          />
        </div>
        <button
          className="btn btn-danger"
          onClick={handleAddToCart}
          style={cartBtnStyle}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
const cartBtnStyle = {
  position: "absolute",
  bottom: "0",
  width: "80%",
  margin: "auto",
  left: "0",
  right: "0",
};

const quantityBoxStyle = {
  display: "inline-block",
  width: "80%",
  margin: "4px auto",
  textAlign: "center",
  fontSize: "1.2rem",
  position: "absolute",
  bottom: "50px",
  left: "0",
  right: "0",
};

const quantityStyle = {
  display: "inline-block",
  width: "120px",
  margin: "0 4px",
  padding: "2px 5px",
};
