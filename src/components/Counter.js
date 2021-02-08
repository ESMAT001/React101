import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
    decrement() {
        this.setState((prevState) => ({
            count: prevState.count - 1
        }))
    }
    reset() {
        this.setState((prevState) => ({
            count:0
        }))
    }
    render() {
        return (
            <div>
                <h2>   {this.state.count}</h2>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

export default Counter;