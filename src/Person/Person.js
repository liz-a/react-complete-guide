import React from 'react';

const person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.switchNameHandler}>I'm a Person and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.ageChangedHandler}></input>
    </div>
  )
};

export default person;
