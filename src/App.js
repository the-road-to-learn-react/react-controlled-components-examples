import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Select from './Components/Select';
import NumberInput from './Components/NumberInput';
import TextInput from './Components/TextInput';
import Checkbox from './Components/Checkbox';
import Radio from './Components/Radio';

class App extends Component {
  render() {
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
          <Select label={'Choose a fruit'} />
        </div>
        <div>
          <NumberInput label={'Choose a number'} min={-1} max={3} />
        </div>
        <div>
          <TextInput label={'Type a text'} />
        </div>
        <div>
          <Checkbox label={'Check the box'} />
        </div>
        <div>
          <Radio label={'Choose a size'} />
        </div>
      </div>
    );
  }
}

export default App;
