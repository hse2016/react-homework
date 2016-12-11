import React, { Component } from 'react';
require("./LargeInput.css");

export default class LargeInput extends Component {

    AddTodoKeyPress(e) {
        if (e.keyCode == 13) {
            this.props.onAddTodo(e);
        }
    }

    render() {
        return (
            <input className="new-todo" value={this.props.inputText} onChange={this.props.onTextChange} onKeyDown={this.AddTodoKeyPress.bind(this)}/>
        );
    }
}