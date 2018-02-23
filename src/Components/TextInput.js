import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onTextInputChange(event.target.value);
  }

  render() {
    const { value, children } = this.props;

    return (
      <label>
        {children}:
        <input
          type="text"
          onChange={this.handleChange}
          value={value}
        />
      </label>
    );
  }
}

export default TextInput;