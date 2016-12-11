import React, {Component} from 'react';
import Header from './../Header/Header'
import TodoList from './../TodoList/TodoList'
import guid from './../../utils/GUID';
require("./TodoApp.css");

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            inputText: ""
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    onTextChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    onAddTodo(event) {
        const newTodo = {
            title: event.target.value,
            completed: false,
            id : guid()
        };
        this.setState((prevState) => ({
            todos: prevState.todos.concat(newTodo),
            inputText: ""
        }));
    }

    toggleTodo(event, id) {
        var updatedItems = this.state.todos.map(item => {
            if (id === item.id)
                item.completed = event.target.checked;
            return item;
        });
        this.setState({
            todos: [].concat(updatedItems)
        });
        console.log(this.state);
    }

    render() {
        return (
            <section className="todoapp">
                <Header inputText={this.state.inputText} onTextChange={this.onTextChange} onAddTodo={this.onAddTodo}/>
                <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>
            </section>
        );
    }
}