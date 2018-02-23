import React, { Component } from 'react';

function getValue(value, min, max) {
    if (value > max) {
      value = max;
    }

    if (value < min) {
      value = min;
    }

    return value;
}

class NumberInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  handleChange(event) {
    let { value } = event.target;
    const { min, max } = this.props;

    this.props.onNumberInputChange(getValue(value, min, max));
  }

  increment() {
    const { value, min, max } = this.props;

    this.props.onNumberInputChange(getValue(value + 1, min, max));
  }

  decrement() {
    const { value, min, max } = this.props;

    this.props.onNumberInputChange(getValue(value - 1, min, max));
  }

  render() {
    const { value, min, max, children } = this.props;

    return (
      <label>
        {children}:
        <input
          type="number"
          min={min}
          max={max}
          onChange={this.handleChange}
          value={value}
        />

        <button onClick={this.increment} type="button">+</button>
        <button onClick={this.decrement} type="button">-</button>
      </label>
    );
  }
}

export default NumberInput;