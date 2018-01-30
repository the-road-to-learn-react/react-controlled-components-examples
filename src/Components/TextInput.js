import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Hello World',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { label } = this.props;

    return (
      <label>
        {label}:
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />

        Output: {this.state.value}
      </label>
    );
  }
}

export default TextInput;