import React, { useState, Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import UserInput from '../components/UserInput/UserInput';
import UserOutput from '../components/UserOutput/UserOutput';
import Validation from '../components/Validation/Validation';
import Char from '../Char/Char';
import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
  background-color: ${props => props.alt? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid green;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: "Max", age: 28},
//       { name: "Justin", age: 22},
//       { name: "Bob", age: 26},
//     ],
//     otherState: 'some other value',
//     showPersons: false
//   })

//   const [ usernameState, setUsernameState] = useState({
//     username: "USERNAME"
//   })

//   const switchNameHandler = (newName) => {
//     setPersonsState({
//       persons: [
//         { name: newName, age: 28},
//         { name: "Justin Lieu", age: 22},
//         { name: "Bob Smith", age: 26},
//       ]
//     })
//   }

//   const nameChangedHandler = event => {
//     setPersonsState({
//       persons: [
//         { name: "Max", age: 28},
//         { name: event.target.value, age: 22},
//         { name: "Bob Smith", age: 26},
//       ]
//     })
//   }

//   const usernameChangedHandler = event => {
//     setUsernameState({
//       username: event.target.value
//     })
//   }

//   const togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow });
//   }

//   const style = {
//     backgroundColor: "white",
//     font: "inherit",
//     border: "1px solid green",
//     padding: "8px",
//     cursor: "pointer"
//   };

//   return (
//     <div className="App">
//       <h1>App</h1>

//       <UserInput changed={usernameChangedHandler} username={usernameState.username} />

//       <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
//       {this.state.showPersons ?
//         <div>
//         <Person name={personsState.persons[0].name} 
//         age={personsState.persons[0].age} 
//         click={switchNameHandler.bind(this, "hello")}/>

//         <Person name={personsState.persons[1].name} 
//         age={personsState.persons[1].age} 
//         click={switchNameHandler.bind(this, "world")}
//         changed = {nameChangedHandler}>props children</Person>

//         <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age} />
//       </div> : null }
      

//       <UserOutput username={usernameState.username} />
//       <UserOutput username={usernameState.username} />
//     </div>
//   );
  
// }

class App extends Component {
  state = {
    persons: [
      { id: 'a12', name: "Max", age: 28},
      { id: 'asdf4', name: "Justin", age: 22},
      { id: '32gsf', name: "Bob", age: 26},
    ],
    otherState: 'some other value',
    showPersons: false,
    username: 'USERNAME',
    userInput: '',
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  //handlers
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

  usernameChangedHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow });
  }

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render(){
    const style = {
      backgroundColor: 'purple',
    };

    const charList = this.state.userInput.split("").map((ch, index) => {
      return <Char 
        character={ch} 
        key={index} 
        clicked={() => this.deleteCharHandler(index)} />
    });

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      )
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black',
      // }
      // btnClass = classes.Red;
    }
  
    return (
      <div className="App">
        {/* <h1 className={classes.join(' ')}>App</h1> */}
  
        <UserInput changed={this.usernameChangedHandler} username={this.state.username} />
  
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler} >Toggle Persons</StyledButton>
        {persons}
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />

        <hr />
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
