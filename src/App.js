import React, { Component } from 'react';
import './App.scss';
import Home from './components/Home';

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Home></Home>
            </div>
        );
    }
}