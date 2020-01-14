import React, { useState, useCallback } from "react";
import ProductList from "components/ProductList/ProductList";
import Filter from "components/Filter/Filter";

const CatalogPage = () => {
  const [catedory, changeCategory] = useState("all");
  return (
    <div className="container">
      <h1 className="header-big">Catalog</h1>

      <div className="catalog">
        <div className="column-left">
          <Filter
            filterCollback={(cat) => {
              changeCategory(cat);
            }}
            // searchCallback={}
          />
        </div>

        <div className="column-right">
          <ProductList category="manufacture" value={catedory} />
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
