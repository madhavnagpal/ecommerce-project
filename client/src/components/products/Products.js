import React, { Component } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get("/api/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    return (
      <div className="container mt-3">
        <div className="row text-center">
          {this.state.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
