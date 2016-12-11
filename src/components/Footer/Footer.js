import React, {Component} from 'react';
require("./Footer.css");


export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count"><strong>{this.props.itemsLeft}</strong> items left</span>
                <ul className="filters">
                    <li>
                        <a className="selected" href="#/">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button className="clear-completed">Clear completed</button>
            </footer>

        );
    }
}