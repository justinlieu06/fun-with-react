import React from 'react';

const userinput = props => {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.username}></input>
    </div>
  )
}

export default userinput;