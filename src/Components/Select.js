import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectChange(event.target.value);
  }

  render() {
    const { value, children } = this.props;

    return (
      <label>
        {children}:
        <select value={value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
    );
  }
}

export default Select;