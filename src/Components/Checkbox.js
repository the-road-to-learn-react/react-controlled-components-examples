import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: true,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.checked });
  }

  render() {
    const { label } = this.props;

    return (
      <label>
        {label}:
        <input
          type="checkbox"
          checked={this.state.value}
          onChange={this.handleChange}
        />

        Output: {this.state.value.toString()}
      </label>
    );
  }
}

export default Checkbox;