import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onCheckboxChange(event.target.checked);
  }

  render() {
    const { value, children } = this.props;

    return (
      <label>
        {children}:
        <input
          type="checkbox"
          checked={value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Checkbox;