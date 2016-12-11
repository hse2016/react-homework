import React, { Component } from 'react';
import Header from './../Header/Header'

export default class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: ""
        };
    }
    render() {
        return (
            <div>
                <Header text={this.state.text} />
            </div>
        );
    }
}