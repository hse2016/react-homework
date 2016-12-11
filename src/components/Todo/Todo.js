import React, {Component} from 'react';
require("./Todo.css");

export default class Todo extends Component {

    toggleTodo(e) {
        this.props.onToggleTodo(e, this.props.id);
    }

    deleteTodo(e) {
        this.props.onDeleteItem(e, this.props.id);
    }

    editTodo(e) {
        this.props.editTodo(e, this.props.id);
    }

    saveTodo(e) {
        if (e.keyCode == 13) {
            this.props.saveTodo(e, this.props.id, e.target.value);
        }
    }

    componentDidUpdate(prevProps) {
        var node = this.refs.editField;
        node.focus();
    }

    render() {
        return (
            <li className={(this.props.completed ? 'completed ' : '') + (this.props.editable ? 'editing ' : '')}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={this.props.completed}
                           onChange={this.toggleTodo.bind(this)}/>
                    <label onDoubleClick={this.editTodo.bind(this)}>{this.props.title}</label>
                    <button className="destroy" onClick={this.deleteTodo.bind(this)}></button>
                </div>
                <input ref='editField' className="edit" onKeyDown={this.saveTodo.bind(this)} defaultValue={this.props.title}
                       autoFocus={this.props.editable ? true : false}/>
            </li>
        );
    }
}