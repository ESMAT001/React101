import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: ''
        }
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    render() {
        return (
            <form>
                <p>Email:{this.state.email}</p>
                <input type="text" value={this.state.email} onChange={this.handleEmail} />
            </form>
        )
    }
}

export default Form
