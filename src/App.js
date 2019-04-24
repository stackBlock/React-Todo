import React from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoList from './components/TodoComponents/TodoList';



const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ThingsToDo: todo,
      item: {
        task: "",
        id: "",
        completed: "",
      }
    }
  }

  




  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      item: {
        ...this.state.item,
        [event.target.name]: event.target.value
      }
    });
  };
  

  addItem = event => {
    event.preventDefault();
    this.setState({
      ThingsToDo: [...this.state.ThingsToDo, this.state.item],
      item: {
        task: ""
      }
    })
  }
  
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
        {/* {this.state.ThingsToDo.map(item => (
          <Todo do={item} />
        ))} */}
        <TodoList shit={this.state.ThingsToDo} />
        </div>
        <form>
          <input
           placeholder="Addition"
           value={this.state.item.task}
           onChange={this.handleChanges}
           name="task"
         />
          <button onClick={this.addItem}>Add Item</button>
          <button >Clear All</button>
        </form>
      </div>
    );
  }
}

export default App;
