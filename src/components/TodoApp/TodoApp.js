import React, {Component} from 'react';
import Header from './../Header/Header'
import TodoList from './../TodoList/TodoList'
import Footer from './../Footer/Footer'
import guid from './../../utils/GUID';
require("./TodoApp.css");

export default class Todo extends Component {

    constructor(props) {
        super(props);

        const loadState = JSON.parse(localStorage.getItem('todos'));
        this.state = loadState || {
                todos: [],
                inputText: "",
                toggledAll: false,
                itemsLeft: 0,
                filter: 'all'
            };

        this.onTextChange = this.onTextChange.bind(this);
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onToggleTodo = this.onToggleTodo.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onToggleAll = this.onToggleAll.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
    }

    onTextChange(event) {
        this.setState({
            inputText: event.target.value
        }, this.saveState);
    }

    onAddTodo(event) {
        const newTodo = {
            title: event.target.value,
            completed: false,
            id: guid(),
            editable: false
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
        }, this.checkToggles);
    }

    onToggleAll(event) {
        const updatedItems = this.state.todos.map(todo => {
            todo.completed = !this.state.toggledAll;
            return todo;
        });
        this.setState({
            todos: [].concat(updatedItems),
        }, this.checkToggles);
    }

    checkToggles() {
        const itemsLeft = this.state.todos.filter(todo => {
            return todo.completed !== true;
        }).length;
        this.setState({
            toggledAll: this.state.todos.length !== 0 && itemsLeft === 0,
            itemsLeft: itemsLeft
        }, this.saveState);
    }

    setFilter(filter) {
        this.setState({
            filter: filter
        }, this.saveState);
    }

    filterTodos() {
        switch (this.state.filter) {
            case 'all':
                return this.state.todos;
            case 'active':
                return this.state.todos.filter(todo => {
                    return todo.completed !== true
                });
            case 'completed':
                return this.state.todos.filter(todo => {
                    return todo.completed === true
                });
        }
    }

    clearCompleted() {
        var updatedItems = this.state.todos.filter(todo => {
            return todo.completed !== true;
        });
        this.setState({
            todos: [].concat(updatedItems),
        }, this.checkToggles);
    }

    saveState() {
        localStorage.setItem('todos', JSON.stringify(this.state));
    }

    editTodo(event, id) {
        const updatedItems = this.state.todos.map(todo => {
            if (id === todo.id)
                todo.editable = true;
            else
                todo.editable = false;
            return todo;
        });
        this.setState({
            todos: [].concat(updatedItems),
        }, this.checkToggles);
    }

    saveTodo(event, id, text) {
        const updatedItems = this.state.todos.map(todo => {
            if (id === todo.id) {
                todo.title = text;
                todo.editable = false;
            }
            return todo;
        });
        this.setState({
            todos: [].concat(updatedItems),
        }, this.checkToggles);
    }

    render() {
        return (
            <section className="todoapp">
                <Header inputText={this.state.inputText}
                        onTextChange={this.onTextChange}
                        onAddTodo={this.onAddTodo}/>

                <TodoList todos={this.filterTodos()}
                          toggledAll={this.state.toggledAll}
                          onToggleTodo={this.onToggleTodo}
                          onDeleteItem={this.onDeleteItem}
                          onToggleAll={this.onToggleAll}
                          editTodo={this.editTodo}
                          saveTodo={this.saveTodo}
                            />

                <Footer itemsLeft={this.state.itemsLeft}
                        filter={this.state.filter}
                        setFilter={this.setFilter}
                        clearCompleted={this.clearCompleted}/>
            </section>
        );
    }
}