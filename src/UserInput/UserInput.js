import React from 'react'

const userInput = (props) => {
  const style = {
    border: '2px solid orange',
    width: '30%',
    height: '20px',
    color: 'orange'
  };

  return (
    <div className='UserInput'>
      <p>hello, what is your name?</p>
      <input type='text' style={style} onChange={props.addName} placeholder={props.name}></input>
    </div>
  );
}

export default userInput;
