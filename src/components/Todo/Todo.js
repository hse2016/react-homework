import React, {Component} from 'react';
require("./Todo.css");

export default class Todo extends Component {

    toggleTodo(e) {
        this.props.onToggleTodo(e, this.props.id);
    }

    deleteTodo(e) {
        this.props.onDeleteItem(e, this.props.id);
    }

    render() {
        return (
            <li className={this.props.completed ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={this.props.completed} onChange={this.toggleTodo.bind(this)}/>
                    <label>{this.props.title}</label>
                    <button className="destroy" onClick={this.deleteTodo.bind(this)}></button>
                </div>
            </li>
        );
    }
}