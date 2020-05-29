import React from "react";

export default function CartItem({ cartItem }) {
  return (
    <div className="col-12">
      <div>{cartItem.name}</div>
      <div>{cartItem.price}</div>
      <div>{cartItem.quantity}</div>
    </div>
  );
}
