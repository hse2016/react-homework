import React, { Component } from 'react';

export default class LargeInput extends Component {

    AddTodoKeyPress(e) {
        if (e.keyCode == 13) {
            this.props.onAddTodo(e);
        }
    }

    render() {
        return (
            <input value={this.props.inputText} onChange={this.props.onTextChange} onKeyDown={this.AddTodoKeyPress.bind(this)}/>
        );
    }
}