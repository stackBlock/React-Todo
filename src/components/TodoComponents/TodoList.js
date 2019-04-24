// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

function TodoList(props) {
  return (
    <div>
      {this.state.ThingsToDo.map(item => (
      <Todo do={item} />
      ))}
    </div>
  )
}



