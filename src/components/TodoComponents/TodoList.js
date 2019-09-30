// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <>
                {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
            </>
        );
    }
}

export default TodoList;