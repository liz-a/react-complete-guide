import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'qwer', name: 'Liz', age: 7 },
      { id: 'tyui', name: 'Natalie', age: 29 },
      { id: 'opas', name: 'Sinny', age: 21 }
    ],
    showPersons: true
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);

    this.setState({
      persons: newPersons
    })
  }

  nameChangeHander = (event, personId) => {
    const newPersons = [...this.state.persons].map((person) => {
      if(person.id === personId) { person.name = event.target.value }
      return person
    });

    this.setState({
      persons: newPersons
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
            this.state.persons.map((person, index) => {
              return <Person
              name={person.name}
              age={person.age}
              click={() => {this.deletePersonHandler(index)}}
              key={person.id}
              changed={(event) => {this.nameChangeHander(event, person.id)}}
              ></Person>
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
      </div>
    );
  }
}

export default App;
