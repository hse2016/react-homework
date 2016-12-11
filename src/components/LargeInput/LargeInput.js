import React, { Component } from 'react';

export default class LargeInput extends Component {
    render() {
        return (
            <input value={this.props.text}/>
        );
    }
}