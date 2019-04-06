import React from 'react';

const Select = ({ value, children, onSelectChange }) => {
  const handleChange = event => {
    onSelectChange(event.target.value);
  };

  return (
    <label>
      {children}:
      <select value={value} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
    </label>
  );
};

export default Select;
