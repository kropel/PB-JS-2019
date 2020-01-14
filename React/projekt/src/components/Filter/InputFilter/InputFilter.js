import React from "react";

const InputFilter = ({ type, name, id, value, checked, onChange, label }) => (
  <div>
    <label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);

export default InputFilter;
