import React, { useState, useCallback } from "react";

const Filter = ({ filterCollback, searchCallback }) => {
  const [radioChecked, radioChange] = useState("all");
  const [serachValue, searchChang] = useState();

  const handleChange = (node) => {
    radioChange(node.target.value);
    filterCollback(node.target.value);
  };

  const handleSearch = (e) => {
    searchChang(e.target.value);
    searchCallback(e.target.value);
  };

  return (
    <div className="filter">
      <div className="filter-header">
        <h4>Search</h4>
        <span className="clear">Clear</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={serachValue}
          onChange={handleSearch}
        />
      </div>
      <h4>Manufacturer</h4>
      <div>
        <div>
          <label>
            <input
              type="radio"
              name="manufacturere"
              id="all"
              value="all"
              checked={"all" === radioChecked}
              onChange={handleChange}
            />
            All
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="manufacturere"
              id="apple"
              value="apple"
              checked={"apple" === radioChecked}
              onChange={handleChange}
            />
            Apple
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="manufacturere"
              id="dell"
              value="dell"
              checked={"dell" === radioChecked}
              onChange={handleChange}
            />
            Dell
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
