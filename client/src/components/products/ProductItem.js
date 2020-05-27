import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="col-md-4 text-center p-2 border rounded my-3">
      <div className="">
        <img src={product.avatar} width="200" height="300" alt="product " />
        <p className="text-wrap text-capitalize font-weight-bold mt-3">
          {product.name}
        </p>
      </div>
    </div>
  );
}
