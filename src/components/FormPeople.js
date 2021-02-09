import React, { Component } from 'react'

export class FormPeople extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            value: '',
            index: 0
        }
        this.inputRef = React.createRef();
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    handleAdd = e => {
        const lst = this.state.people;
        lst.push([this.inputRef.current.value, this.state.index]);
        this.setState({
            people: lst,
            index: this.state.index + 1,
            value: ""
        }, () => {
            this.inputRef.current.value = ""
        })
    }
    removePerson = i => {
        const ls = this.state.people.filter((person) => {
            return person[1] !== i;
        })

        this.setState({
            people: ls
        })
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.value} onChange={this.handleChange} ref={this.inputRef} />
                <button onClick={this.handleAdd} >Add</button>
                {
                    this.state.people.map((person) => {
                        return (
                            <h4 key={person[1]} >
                                {person[0]} <button onClick={() => { this.removePerson(person[1]) }} >X</button>
                            </h4>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default FormPeople
