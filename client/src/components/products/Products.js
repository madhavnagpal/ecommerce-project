import React from "react";
import ProductItem from "./ProductItem";

export default function Products({ products }) {
  return (
    <div className="container mt-3">
      <div className="row text-center">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
