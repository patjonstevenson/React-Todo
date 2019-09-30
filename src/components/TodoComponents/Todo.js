import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

class Todo extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div key={this.props.todo.id} className={`todo${this.props.todo.completed ? " completed" : ""}`} >
                <h3>{this.props.todo.name}</h3>
            </div>
        );

    }
}

export default Todo;