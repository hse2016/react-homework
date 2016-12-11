import React, {Component} from 'react';
require("./Todo.css");

export default class Todo extends Component {

    toggleTodo() {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        return (
            <li onClick={this.toggleTodo}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>{this.props.title}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        );
    }
}