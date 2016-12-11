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
        this.onToggleTodo = this.onToggleTodo.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
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

    onToggleTodo(event, id) {
        const updatedItems = this.state.todos.map(todo => {
            if (id === todo.id)
                todo.completed = event.target.checked;
            return todo;
        });
        this.setState({
            todos: [].concat(updatedItems)
        });
        console.log(this.state);
    }

    onDeleteItem(event, id) {
        var updatedItems = this.state.todos.filter(todo => {
            return todo.id !== id;
        });

        this.setState({
            todos: [].concat(updatedItems)
        });
    }

    render() {
        return (
            <section className="todoapp">
                <Header inputText={this.state.inputText} onTextChange={this.onTextChange} onAddTodo={this.onAddTodo}/>
                <TodoList todos={this.state.todos} onToggleTodo={this.onToggleTodo} onDeleteItem={this.onDeleteItem}/>
            </section>
        );
    }
}