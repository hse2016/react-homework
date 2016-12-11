import React, {Component} from 'react';
import Todo from './../Todo/Todo'
require("./TodoList.css");

export default class TodoList extends Component {
    render() {
        return (
            <section className="main">

                <input className="toggle-all" type="checkbox" checked={this.props.toggledAll} onClick={this.props.onToggleAll}/>

                <div className="todo-list">
                    {this.props.todos.map(item => (
                        <Todo title={item.title}
                              id={item.id}
                              key={item.id}
                              completed={item.completed}
                              editable={item.editable}
                              onDeleteItem={this.props.onDeleteItem}
                              onToggleTodo={this.props.onToggleTodo}
                              editTodo={this.props.editTodo}
                              saveTodo={this.props.saveTodo}/>
                    ))}
                </div>

            </section>
        );
    }
}