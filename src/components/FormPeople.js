import React, { Component } from 'react'

export class FormPeople extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            value: ''
        }
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    handleAdd = e => {
        const lst = this.state.people;
        lst.push(this.state.value);
        this.setState({
            people: lst
        })
    }
    render() {
        return (
            <React.Fragment>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleAdd} >Add</button>
                {

                    this.state.people.map(
                        (person, i) => {
                            return <h3 key={i} >{person}</h3>;
                        }
                    )
                }
            </React.Fragment>
        )
    }
}

export default FormPeople
