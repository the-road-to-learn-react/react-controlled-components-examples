import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Select from './Components/Select';
import NumberInput from './Components/NumberInput';
import TextInput from './Components/TextInput';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: 'grapefruit',
      numberInputValue: 0,
      textInputValue: 'Hello World',
      checkboxValue: true,
      radioValue: 'small',
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleSelectChange(value) {
    this.setState({ selectValue: value });
  }

  handleNumberInputChange(value) {
    this.setState({ numberInputValue: value });
  }

  handleTextInputChange(value) {
    this.setState({ textInputValue: value });
  }

  handleCheckboxChange(value) {
    this.setState({ checkboxValue: value });
  }

  handleRadioChange(value) {
    this.setState({ radioValue: value });
  }

  render() {
    const {
      selectValue,
      numberInputValue,
      textInputValue,
      checkboxValue,
      radioValue,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <Select value={selectValue} onSelectChange={this.handleSelectChange}>Choose a fruit</Select>
          Result: {selectValue}
        </div>
        <div>
          <NumberInput value={numberInputValue} onNumberInputChange={this.handleNumberInputChange} min={-1} max={3}>Choose a number</NumberInput>
          Result: {numberInputValue}
        </div>
        <div>
          <TextInput value={textInputValue} onTextInputChange={this.handleTextInputChange}>Type a text</TextInput>
          Result: {textInputValue}
        </div>
        <div>
          <Checkbox value={checkboxValue} onCheckboxChange={this.handleCheckboxChange}>Check the box</Checkbox>
          Result: {checkboxValue.toString()}
        </div>
        <div>
          <Radio value={radioValue} onRadioChange={this.handleRadioChange}>Choose a size</Radio>
          Result: {radioValue}
        </div>
      </div>
    );
  }
}

export default App;
