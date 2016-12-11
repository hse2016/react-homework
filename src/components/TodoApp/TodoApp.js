import React, { Component } from 'react';
import Header from './../Header/Header'

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            inputText: ""
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
    }

    onTextChange(event) {
        this.setState({
            text: event.target.value
        });
        console.log(event);
    }

    onAddTodo(event) {
        console.log(event);
    }

    render() {
        return (
            <div>
                <Header inputText={this.state.inputText} onTextChange={this.onTextChange} onAddTodo={this.onAddTodo} />
            </div>
        );
    }
}