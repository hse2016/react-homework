import React, { Component } from 'react';
import Header from './../Header/Header'
import TodoList from './../TodoList/TodoList'
require("./TodoApp.css");

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [{title : 'Artem'}],
            inputText: ""
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    onTextChange(event) {
        this.setState({
            text: event.target.value,
            completed: false
        });
    }

    onAddTodo(event) {
        const newTodo = {'title' : event.target.value};
        console.log(newTodo);
        this.setState((prevState) => ({
            todos: prevState.todos.concat(newTodo),
            inputText: ""
        }));
    }

    toggleTodo(id) {
        console.log(id);
    }

    render() {
        return (
            <section className="todoapp">
                <Header inputText={this.state.inputText} onTextChange={this.onTextChange} onAddTodo={this.onAddTodo}/>
                <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
            </section>
        );
    }
}