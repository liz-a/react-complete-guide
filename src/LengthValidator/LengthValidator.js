import React from 'react';

const lengthValidator = (props) => {
  const output = props.length < 5 ? <p>Text too short</p> : <p>Text long enough</p>;
  return output;
}

export default lengthValidator;
