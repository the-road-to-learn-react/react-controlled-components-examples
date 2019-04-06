import React from 'react';

const TextInput = ({ value, onTextInputChange, children }) => {
  const handleChange = event => {
    onTextInputChange(event.target.value);
  };

  return (
    <label>
      {children}:
      <input type="text" onChange={handleChange} value={value} />
    </label>
  );
};

export default TextInput;
