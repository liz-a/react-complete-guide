import React from 'react';

const char = (props) => {
  return(
    <div className="Char" onClick={props.del}>
      <p>{props.letter}</p>
    </div>
  )
}

export default char;
