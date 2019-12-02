import React from 'react';
import ReactDOM from "react-dom";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./index.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: localStorage.getItem('saveState')
        ? JSON.parse(localStorage.getItem('saveState'))
        : []
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

  toggleItem = id => {
    console.log(this.state.todos)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  };

  save = () => {
    const saveState = JSON.stringify(this.state.todos);
    localStorage.setItem('saveState', saveState);
  }


  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
        <button onClick={this.save}>Save</button>
      </div>
    );
  }
}

export default App;
