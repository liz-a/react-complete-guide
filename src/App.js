import React, { useState } from 'react';
import './App.css';
import './Char/Char.css';
import LengthValidator from './LengthValidator/LengthValidator';
import Char from './Char/Char';

const app = props => {

  const [sentenceState, setSentenceState] = useState({
    sentence: 'hello world',
    length: 0
  })

  const inputHandler = event => {
    setSentenceState({
      sentence: event.target.value,
      length: event.target.value.length
    });
  }

  const deleteInputHandler = (event, index) => {
    const newSentence = sentenceState.sentence.split('').filter((char,i) => i !== index).join('');
    setSentenceState({...sentenceState, sentence: newSentence});
  }

  const chars = sentenceState.sentence.split('').map((char, index) => {
    return <Char
      letter={char}
      key={Math.random()}
      del={(event, i) => { deleteInputHandler(event, index) }}
    ></Char>
  });


  return (
    <div className="App">
      <input onChange={(event) => { inputHandler(event) }} value={sentenceState.sentence}></input>
      <p>{sentenceState.length}</p>
      <LengthValidator length={sentenceState.length}></LengthValidator>
      {chars}
    </div>
  );
}

export default app;
