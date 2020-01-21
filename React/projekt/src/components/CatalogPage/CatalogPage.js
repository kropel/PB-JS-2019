import React, { useState } from "react";
import ProductList from "components/ProductList/ProductList";
import Filter from "components/Filter/Filter";
import Container from "components/Container/Container";
import TitleComponent from "components/TitleComponent/TitleComponent";

const CatalogPage = () => {
  const [value, setValue] = useState("all");

  const filterCollback = (value) => setValue(value);

  return (
    <Container>
      <TitleComponent title={"Catalog"} />

      <div className="catalog">
        <div className="column-left">
          <Filter filterCollback={filterCollback} />
        </div>

        <div className="column-right">
          <ProductList value={value} />
        </div>
      </div>
    </Container>
  );
};

export default CatalogPage;
