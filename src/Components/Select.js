import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'grapefruit',
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
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>

        Output: {this.state.value}
      </label>
    );
  }
}

export default Select;