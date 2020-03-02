import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

const app = props => {

  const [ personsState, setPersonsState ] = useState({
    persons: [
      { age: 7 },
      { age: 63 },
      { age: 21 }
    ]
  });

  const [otherState, setOtherState] = useState(101);

  const switchNameHandler = () => {
    setPersonsState(
      { persons: [{age: 100}, ...personsState.persons]}
    );
  }

  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <button onClick={switchNameHandler} >Switch Name</button>
      {
        personsState.persons.map(person => {
          return <Person age={person.age}></Person>
        })
      }
    </div>
  );
}

export default app;
