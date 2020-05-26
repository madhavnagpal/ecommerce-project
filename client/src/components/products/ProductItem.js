import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="col-md-4 text-center p-2 border rounded">
        <div className="">
          <img src={product.avatar} width="200" height="300" />
          <p className="text-wrap text-capitalize font-weight-bold mt-3">
            {product.name}
          </p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
