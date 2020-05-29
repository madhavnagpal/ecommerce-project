import React, { useContext, useEffect } from "react";
import ProductItem from "./ProductItem";

import { ProductsContext } from "../../contexts/ProductsContext";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useContext(ProductsContext);

  useEffect(() => {
    axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

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
