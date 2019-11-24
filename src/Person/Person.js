import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" />
    </div>
  );
}

export default person;