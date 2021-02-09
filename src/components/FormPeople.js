import React, { Component } from 'react'

export class FormPeople extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            value: ''
        }
        this.inputRef=React.createRef();
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    handleAdd = e => {
        const lst = this.state.people;
        lst.push(this.inputRef.current.value);
        this.setState({
            people: lst
        },()=>{
            this.inputRef.current.value=""
        } )
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.value} onChange={this.handleChange} ref={this.inputRef} />
                <button onClick={this.handleAdd} >Add</button>
                {
                    this.state.people.map((person, i) => <h3 key={i} >{person}</h3>)
                }
            </React.Fragment>
        )
    }
}

export default FormPeople
