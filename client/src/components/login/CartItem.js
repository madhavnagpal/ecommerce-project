import React from "react";

export default function CartItem({ cartItem }) {
  return (
    <div className="row">
      <div className="col-md-4 col-sm-6 text-center p-0  border rounded my-3">
        <div style={{ paddingBottom: "120px" }}>
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
          <div>
            Quantity
            {/* <input
              type="number"
              min="1"
              style={quantityStyle}
              onChange={handleQuantityChange}
              value={quantity}
            /> */}
          </div>
          {/* <button
            className="btn btn-danger"
            onClick={handleAddToCart}
            style={cartBtnStyle}
          > */}
          {/* Add To Cart
          </button> */}
        </div>
      </div>
    </div>
  );
}
