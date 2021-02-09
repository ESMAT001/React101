import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: 'Ahmad ',
            option: '1'
        }
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleSelect = e => {
        this.setState({
            option:e.target.value
        })
    }
    render() {
        return (
            <form>
                <p>Username : {this.state.username}</p>
                <input type="text" value={this.state.email} onChange={this.handleEmail} />
                <div>
                    <select value={this.state.option} onChange={this.handleSelect}>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default Form
