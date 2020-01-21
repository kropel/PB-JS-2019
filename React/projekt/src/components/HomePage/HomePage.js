import React from "react";
import ProductList from "components/ProductList/ProductList";
import Container from "components/Container/Container";
import TitleComponent from "components/TitleComponent/TitleComponent";

const HomePage = () => {
  return (
    <Container>
      <TitleComponent title={"Welcome to our store"} />

      <h2 className="header-small">Desktops</h2>
      <ProductList value="desktop" featured />

      <h2 className="header-small">Tablets</h2>
      <ProductList value="tablet" featured />
    </Container>
  );
};

export default HomePage;
