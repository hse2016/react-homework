import React, {Component} from 'react';
require("./Todo.css");

export default class Todo extends Component {

    toggleTodo(e) {
        this.props.toggleTodo(e, this.props.id);
    }

    render() {
        return (
            <li className={this.props.completed ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.toggleTodo.bind(this)}/>
                    <label>{this.props.title}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        );
    }
}