import products from "../mocks/products";

class ProductService {
  static getAllProduct() {
    return products;
  }

  static getFeaturedProductByCategory(category) {
    return products.filter(
      (product) => product.category === category && product.featured
    );
  }

  static getProductByCategory(category) {
    return products.filter((product) => product.category === category);
  }

  static getProductByPassedParameter(parameter, parameterValue) {
    return products.filter((product) => {
      return product[parameter].toLowerCase() === parameterValue;
    });
  }
}

export default ProductService;
