import React, { Component } from 'react';

import classes from './App.module.css';
// import Radium, { StyleRoot } from 'radium';

// import Person from '../components/Persons/Persons/Person';
import Persons from '../components/Persons/Persons';

import Cockpit from '../components/Cockpit/Cockpit';

// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

// import styled from 'styled-components';

// const StyledButton = styled.button`
//   background-color : ${props => props.alt ? 'red' : 'green'};
//   color : white;
//   borderColor : 1px solid blue;
//   font : inherit;
//   padding : 8px;
//   cursor : pointer;
//   &:hover {
//     background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color : black;
//   }
// `;

class App extends Component {
  state = {
    persons : [
      { id : 'acnck', name : 'Max', age : '28'},
      { id : 'csdsl', name : 'Steve', age : '24'},
      { id : 'cknsd', name : 'Grey', age : '26'}
    ],
    other_state : 'Some other value!',
    showPersons : false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => pers.id === id);
    
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons : persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons : persons
    });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons : !this.state.showPersons
    });
  }

  render() {

    // const style = {
    //   backgroundColor : 'green',
    //   color : 'white',
    //   borderColor : '1px solid blue',
    //   font : 'inherit',
    //   padding : '8px',
    //   cursor : 'pointer',
    //   ':hover' : {
    //     backgroundColor : 'lightgreen',
    //     color : 'black',
    //   }
    // };

    let persons = null;

    if(this.state.showPersons) { 
      persons = (<div> <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
        {/* {this.state.persons.map((person, index) =>  {
          return <Person //<ErrorBoundary> 
            name={person.name} 
            age={person.age} 
            click={() => this.deletePersonHandler(index)} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}
          />//</ErrorBoundary>
        })} */}
        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person click={() => this.switchNameHandler('Matrix')}  //click={this.switchNameHandler.bind(this, 'Matrix')} (efficient), arrow function way is less efficient 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler} >
          My hobbies : Racing!</Person>*/}
        </div>);

        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor : 'salmon',
        //   color : 'black',
        // };
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <Cockpit 
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
        />
        {/* <h1>Hi, I'm a React App :)</h1> */}
        {/* <p className={assignedClasses.join(' ')}>It's working!</p> */}
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'Maxxx')}>Switch Name</button> */}
        {/* <button className={btnClasses} onClick={this.togglePersonHandler}>Toggle Persons</button> */}
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Persons</StyledButton> */}
        {persons}
        {/* { this.state.showPersons  ?
          <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person click={() => this.switchNameHandler('Matrix')}  //click={this.switchNameHandler.bind(this, 'Matrix')} (efficient), arrow function way is less efficient 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} >
            My hobbies : Racing!</Person>
        </div> : null } */}
      </div>
      /* </StyleRoot> */
    );
  }
}

export default App;
// export default Radium(App);
