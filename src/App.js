import React from 'react';
import './App.css';
import './UserInput/UserInput.css';
import './UserOutput/UserOutput.css';
import { useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = (props) => {

  const [personState, setPersonState] = useState({
    name: 'Roger'
  })


  const nameInputHandler = (event) => {
    setPersonState({
      name: event.target.value
    })
  }

  return (
    <div className="App">
      <UserInput addName={nameInputHandler} name={personState.name}/>
      <UserOutput name={personState.name} />
    </div>
  );
}

export default app;
