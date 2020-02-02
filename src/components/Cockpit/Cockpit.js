import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // let classes = [];
  // if (this.state.persons.length <= 2){
  //   classes.push('red');
  // }
  // if (this.state.persons.length <= 1){
  //   classes.push('bold')
  // }
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons){
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2){
    assignedClasses.push( classes.red );
  }
  if (props.persons.length <= 1){
    assignedClasses.push( classes.bold );
  }


  return (
    <div className={classes.Cockpit}>
      <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;