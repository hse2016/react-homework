import React, { Component } from 'react';
import LargeInput from './../LargeInput/LargeInput'

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <h1>todos</h1>
                <LargeInput text={this.props.text}/>
            </div>
        );
    }
}