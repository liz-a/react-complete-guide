import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { age: 7 },
      { age: 63 },
      { age: 21 }
    ]
  }

  switchNameHandler = () => {
    this.setState(
      { persons: [{age: 100}, ...this.state.persons]}
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        {
          this.state.persons.map(person => {
            return <Person age={person.age}></Person>
          })
        }
      </div>
    );
  }
}

export default App;
