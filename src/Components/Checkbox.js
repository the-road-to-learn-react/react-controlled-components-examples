import React from 'react';

const Checkbox = ({ value, onCheckboxChange, children }) => {
  const handleChange = event => {
    onCheckboxChange(event.target.checked);
  };

  return (
    <label>
      {children}:
      <input
        type="checkbox"
        checked={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Checkbox;
