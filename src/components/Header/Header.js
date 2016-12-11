import React, { Component } from 'react';
import LargeInput from './../LargeInput/LargeInput'
require("./Header.css");


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>todos</h1>
                <LargeInput text={this.props.inputText} onTextChange={this.props.onTextChange} onAddTodo={this.props.onAddTodo} />
            </div>
        );
    }
}