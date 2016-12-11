import React, {Component} from 'react';
require("./Footer.css");


export default class Footer extends Component {

    showAll() {
        this.props.setFilter('all');
    }

    showActive() {
        this.props.setFilter('active');
    }

    showCompleted() {
        this.props.setFilter('completed');
    }

    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.itemsLeft}</strong> items left</span>
                <ul className="filters">
                    <li>
                        <a onClick={this.showAll.bind(this)} className={this.props.filter === 'all' ? "selected" : ''} href="#">All</a>
                    </li>
                    <li>
                        <a onClick={this.showActive.bind(this)} className={this.props.filter === 'active' ? "selected" : ''} href="#">Active</a>
                    </li>
                    <li>
                        <a onClick={this.showCompleted.bind(this)} className={this.props.filter === 'completed' ? "selected" : ''} href="#">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>

        );
    }
}