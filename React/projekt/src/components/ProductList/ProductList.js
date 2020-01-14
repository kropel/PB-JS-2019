import React from "react";
import Product from "components/Product/Product";
import ProductService from "../../services/products.service";

const ProductList = ({ category = "", value = "", featured = false }) => {
  let productList;
  if (value === "all") {
    productList = ProductService.getAllProduct();
  } else if (featured) {
    productList = ProductService.getFeaturedProductByCategory(value);
  } else if (!!category && !!value) {
    productList = ProductService.getProductByPassedParameter(category, value);
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
