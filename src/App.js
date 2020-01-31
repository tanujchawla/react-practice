import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name : 'Max', age : '28'},
      { name : 'Steve', age : '24'}
    ],
    other_state : 'Some other value!'
  };

  switchNameHandler = (newName) => {
    console.log('Switch!!!');
    this.setState({
      persons : [
        { name : newName, age : '28'},
        { name : 'Steve', age : '26'}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name : 'Max', age : '28'},
        { name : event.target.value, age : '26'}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor : 'white',
      borderColor : '1px solid blue',
      font : 'inherit',
      padding : '8px',
      cursor : 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App :)</h1>
        <p>It's working!</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maxxx')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={() => this.switchNameHandler('Matrix')}  //click={this.switchNameHandler.bind(this, 'Matrix')} (efficient), arrow function way is less efficient 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler} >
          My hobbies : Racing!</Person>
      </div>
    );
  }
}

export default App;
