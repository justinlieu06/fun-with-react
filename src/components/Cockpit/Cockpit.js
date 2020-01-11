import React from 'react';
import classes from './Cockpit.css';

const cockpit = () => {
  let classes = [];
  if (this.state.persons.length <= 2){
    classes.push('red');
  }
  if (this.state.persons.length <= 1){
    classes.push('bold')
  }


  return (
    <div className={classes.Cockpit}>
      <button onClick={this.togglePersonsHandler} style={style}>Toggle Persons</button>
    </div>
  );
};

export default cockpit;