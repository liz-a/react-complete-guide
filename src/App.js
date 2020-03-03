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
    ]
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button
        style={style}
        onClick={ () => { this.switchNameHandler({age: 100}) } } >Switch Name</button>
        {
          this.state.persons.map(person => {
            return <Person age={person.age} switchNameHandler={this.switchNameHandler.bind(this, {age: 101})} ageChangedHandler={this.ageChangedHandler} ></Person>
          })
        }
      </div>
    );
  }
}

export default App;
