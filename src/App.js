import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28},
      { name: "Justin", age: 22},
      { name: "Bob", age: 26},
    ],
  })

  const [ usernameState, setUsernameState] = useState({
    username: "USERNAME"
  })

  const switchNameHandler = (newName) => {
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

  const usernameChangedHandler = event => {
    setUsernameState({
      username: event.target.value
    })
  }

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid green",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>App</h1>

      <UserInput changed={usernameChangedHandler} username={usernameState.username} />

      <button onClick={switchNameHandler} style={style}>Switch Name</button>

      <Person name={personsState.persons[0].name} 
      age={personsState.persons[0].age} 
      click={switchNameHandler.bind(this, "hello")}/>

      <Person name={personsState.persons[1].name} 
      age={personsState.persons[1].age} 
      click={switchNameHandler.bind(this, "world")}
      changed = {nameChangedHandler}>props children</Person>

      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age} />

      <UserOutput username={usernameState.username} />
      <UserOutput username={usernameState.username} />
    </div>
  );
  
}

export default App;
