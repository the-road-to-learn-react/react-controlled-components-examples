import React from 'react';

const Radio = ({ value, children, onRadioChange }) => {
  const handleChange = event => {
    onRadioChange(event.target.value);
  };

  return (
    <span>
      {children}:
      <label>
        <input
          type="radio"
          value="small"
          checked={value === 'small'}
          onChange={handleChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          value="medium"
          checked={value === 'medium'}
          onChange={handleChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          value="large"
          checked={value === 'large'}
          onChange={handleChange}
        />
        Large
      </label>
    </span>
  );
};

export default Radio;
