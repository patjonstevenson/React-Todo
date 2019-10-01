import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

class Todo extends React.Component {
    render() {
        return (
            <div
                className={`todo${this.props.todo.completed ? " completed" : ""}`}
                onClick={() => this.props.toggleItem(this.props.todo.id)}
            >
                <p>{this.props.todo.name}</p>
            </div>
        );
    }
}

export default Todo;