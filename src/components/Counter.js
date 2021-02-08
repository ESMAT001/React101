import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState((prevState) => {
            return ({
                count: prevState.count+1
            })
        })
    }
    render() {
        return (
            <div>
                <h2>counter - {this.state.count}</h2>
                <button onClick={this.increment}>+1</button>
            </div>
        )
    }
}

export default Counter;