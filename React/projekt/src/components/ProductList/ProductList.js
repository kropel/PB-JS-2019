import React from "react";
import Product from "components/Product/Product";
import ProductService from "../../services/products.service";

const ProductList = ({ value, featured }) => {
  let productList;
  if (value === "all") {
    productList = ProductService.getAllProduct();
  } else if (featured) {
    productList = ProductService.getFeaturedProductByCategory(value);
  } else if (!!value) {
    productList = ProductService.getSearchElements(value);
  }

  return (
    <div className="products">
      {productList.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
