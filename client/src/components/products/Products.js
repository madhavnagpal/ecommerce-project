import React, { Component } from "react";
import axios from "axios";

export class Products extends Component {
  render() {
    axios.get("/api/products").then((res) => console.log(res.data[0].avatar));
    return (
      <div>
        <h1>Products</h1>
      </div>
    );
  }
}

export default Products;
