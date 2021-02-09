import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            username: 'Ahmad ',
            option: '1',
            show:false
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
    handleSubmit=e=>{
        e.preventDefault();
        this.setState({
            show:true
        })
    }
    render() {
        const {email,username,option,show}=this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {show && <p>Email : {email} option : {option}</p>}
                <p>Username : {username}</p>
                <input type="text" value={email} onChange={this.handleEmail} />
                <div>
                    <select value={option} onChange={this.handleSelect}>
                        <option value="1" >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form
