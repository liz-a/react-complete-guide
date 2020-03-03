import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { age: 7 },
      { age: 63 },
      { age: 21 }
    ],
    showPersons: false
  }

  switchNameHandler = (newAge) => {
    this.setState({
      persons: [newAge, ...this.state.persons]
    });
  }

  ageChangedHandler = (event) => {
    this.setState({
      persons: [{age: event.target.value}, ...this.state.persons]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person age={person.age} switchNameHandler={this.switchNameHandler.bind(this, {age: 101})} ageChangedHandler={this.ageChangedHandler} ></Person>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button
        style={style}
        onClick={this.togglePersonsHandler} >Switch</button>
        {persons}
        {/* {this.state.showPersons && <div>
          {
            this.state.persons.map(person => {
              return <Person age={person.age} switchNameHandler={this.switchNameHandler.bind(this, {age: 101})} ageChangedHandler={this.ageChangedHandler} ></Person>
            })
          }
        </div>} */}
      </div>
    );
  }
}

export default App;
