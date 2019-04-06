import React from 'react';

function getValue(value, min, max) {
  if (value > max) {
    value = max;
  }

  if (value < min) {
    value = min;
  }

  return value;
}

const NumberInput = ({
  value,
  min,
  max,
  children,
  onNumberInputChange,
}) => {
  const handleChange = event => {
    onNumberInputChange(getValue(event.target.value, min, max));
  };

  const increment = () => {
    onNumberInputChange(getValue(value + 1, min, max));
  };

  const decrement = () => {
    onNumberInputChange(getValue(value - 1, min, max));
  };

  return (
    <label>
      {children}:
      <input
        type="number"
        min={min}
        max={max}
        onChange={handleChange}
        value={value}
      />
      <button onClick={increment} type="button">
        +
      </button>
      <button onClick={decrement} type="button">
        -
      </button>
    </label>
  );
};

export default NumberInput;
