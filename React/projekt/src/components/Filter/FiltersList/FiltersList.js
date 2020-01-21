import React from "react";
import InputFilter from "components/Filter/InputFilter/InputFilter";

const FiltersList = ({ manufacturers, radioChecked, onChange }) => {
  const filtersManufacturers = manufacturers.map((manu, key) => {
    let lowerCase = manu.toLowerCase();
    let checked = lowerCase === radioChecked;
    return (
      <InputFilter
        key={key}
        type="radio"
        name="manufacturere"
        id={lowerCase}
        value={lowerCase}
        checked={checked}
        onChange={onChange}
        label={manu}
      />
    );
  });
  return filtersManufacturers;
};

export default FiltersList;
