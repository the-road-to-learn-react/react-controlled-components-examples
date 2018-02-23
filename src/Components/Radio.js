import React, { Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onRadioChange(event.target.value);
  }

  render() {
    const { value, children } = this.props;

    return (
      <span>
        {children}:

        <label>
          <input
            type="radio"
            value="small"
            checked={value === 'small'}
            onChange={this.handleChange}
          />
          Small
        </label>

        <label>
          <input
            type="radio"
            value="medium"
            checked={value === 'medium'}
            onChange={this.handleChange}
          />
          Medium
        </label>

        <label>
          <input
            type="radio"
            value="large"
            checked={value === 'large'}
            onChange={this.handleChange}
          />
          Large
        </label>
      </span>
    );
  }
}

export default Radio;
