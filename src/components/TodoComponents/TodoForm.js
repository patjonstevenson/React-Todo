import React from "react";
import ReactDOM from "react-dom";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    }

    handleChanges = e => {
        this.setState({
            name: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.name);
        this.setState({
            name: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input placeholder="Task" value={this.state.name} onChange={this.handleChanges} />
                <button type="submit">Add task</button>
            </form>
        );
    }
}

export default TodoForm;