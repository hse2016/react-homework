import React, {Component} from 'react';
import Header from './../Header/Header'
import TodoList from './../TodoList/TodoList'
import Footer from './../Footer/Footer'
import guid from './../../utils/GUID';
require("./TodoApp.css");

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            inputText: "",
            toggledAll: false,
            itemsLeft: 0
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onToggleTodo = this.onToggleTodo.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onToggleAll = this.onToggleAll.bind(this);
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
            inputText: "",
            toggledAll: false
        }), this.checkToggles);
    }

    onToggleTodo(event, id) {
        const updatedItems = this.state.todos.map(todo => {
            if (id === todo.id)
                todo.completed = event.target.checked;
            return todo;
        });
        this.setState({
            todos: [].concat(updatedItems),
        }, this.checkToggles);
    }

    onDeleteItem(event, id) {
        var updatedItems = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            todos: [].concat(updatedItems),
            toggledAll: this.checkToggleAll()
        }, this.checkToggles);
    }

    onToggleAll(event) {
        const updatedItems = this.state.todos.map(todo => {
            todo.completed = !this.state.toggledAll;
            return todo;
        });
        this.setState({
            todos: [].concat(updatedItems),
            toggledAll: !this.state.toggledAll
        }, this.checkToggles);
    }

    checkToggles() {
        const itemsLeft = this.state.todos.filter(todo => { return todo.completed !== true; }).length;
        this.setState({
            toggledAll: this.state.todos.length !== 0 && itemsLeft === 0,
            itemsLeft: itemsLeft
        });
    }

    render() {
        return (
            <section className="todoapp">
                <Header inputText={this.state.inputText} onTextChange={this.onTextChange}
                        onAddTodo={this.onAddTodo} />
                <TodoList todos={this.state.todos} toggledAll={this.state.toggledAll}
                          onToggleTodo={this.onToggleTodo} onDeleteItem={this.onDeleteItem} onToggleAll={this.onToggleAll}/>
                <Footer itemsLeft={this.state.itemsLeft} />
            </section>
        );
    }
}