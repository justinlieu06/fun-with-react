import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28},
      { name: "Justin", age: 22},
      { name: "Bob", age: 26},
    ],
    otherState: 'some other value'
  })

  const nameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 28},
        { name: "Justin Lieu", age: 22},
        { name: "Bob Smith", age: 26},
      ]
    })
  }

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28},
        { name: event.target.value, age: 22},
        { name: "Bob Smith", age: 26},
      ]
    })
  }

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={nameHandler}>Switch Name</button>

      <Person name={personsState.persons[0].name} 
      age={personsState.persons[0].age} 
      click={nameHandler.bind(this, "hello")}/>

      <Person name={personsState.persons[1].name} 
      age={personsState.persons[1].age} 
      click={nameHandler.bind(this, "world")}
      changed = {nameChangedHandler.bind(this)}>props children</Person>

      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age} />
    </div>
  );
  
}

export default App;
