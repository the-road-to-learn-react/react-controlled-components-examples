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

    this.state = {
      value: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  handleChange(event) {
    let { value } = event.target;
    const { min, max } = this.props;

    this.setState({ value: getValue(value, min, max) });
  }

  increment() {
    const { min, max } = this.props;

    this.setState((prevState) => ({ value: getValue(prevState.value + 1, min, max) }));
  }

  decrement() {
    const { min, max } = this.props;

    this.setState((prevState) => ({ value: getValue(prevState.value - 1, min, max) }));
  }

  render() {
    const { label, min, max } = this.props;

    return (
      <label>
        {label}:
        <input
          type="number"
          min={min}
          max={max}
          onChange={this.handleChange}
          value={this.state.value}
        />

        <button onClick={this.increment} type="button">+</button>
        <button onClick={this.decrement} type="button">-</button>

        Output: {this.state.value}
      </label>
    );
  }
}

export default NumberInput;