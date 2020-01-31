import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App :)</h1>
        <p>It's working!</p>
        <Person name="Max" age="28" />
        <Person name="Steve" age="24">My hobbies : Racing!</Person>
      </div>
    );
  }
}

export default App;
