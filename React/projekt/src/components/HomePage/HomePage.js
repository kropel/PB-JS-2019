import React from "react";
import ProductList from "components/ProductList/ProductList";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="header-big">Welcome to our store</h1>

      <h2 className="header-small">Desktops</h2>
      <ProductList category="category" value="desktop" featured={true} />

      <h2 className="header-small">Tablets</h2>
      <ProductList category="category" value="tablet" featured={true} />
    </div>
  );
};

export default HomePage;
