import React, { Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'small',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { label } = this.props;

    return (
      <div>
        {label}

        <label>
          <input
            type="radio"
            value="small"
            checked={this.state.value === 'small'}
            onChange={this.handleChange}
          />
          Small
        </label>

        <label>
          <input
            type="radio"
            value="medium"
            checked={this.state.value === 'medium'}
            onChange={this.handleChange}
          />
          Medium
        </label>

        <label>
          <input
            type="radio"
            value="large"
            checked={this.state.value === 'large'}
            onChange={this.handleChange}
          />
          Large
        </label>

        Output: {this.state.value}
      </div>
    );
  }
}

export default Radio;
