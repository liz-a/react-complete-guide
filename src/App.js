import React, { Component } from 'react';
import './App.css';
import './Person/Person.css'
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>I'm working!</p>
          <button
          style={style}
          onClick={this.togglePersonsHandler} >Switch</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
