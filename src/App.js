import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  addItem = taskName => {
    const newItem = {
      name: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newItem]
    })
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  };


  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
