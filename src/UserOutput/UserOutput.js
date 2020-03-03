import React from 'react';

const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>That is a good name, I like names beginning with {props.name[0]}.</p>

      <p>I also like names ending with {props.name[0].toLowerCase()}.</p>
    </div>
  )
};

export default userOutput;
