import React, { Component } from 'react'

export default class Api extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount = () => {
        this.fetchData();
    }
    fetchData = async () => {
        let data = await fetch("https://pixabay.com/api/?key=3287863-2a174c3f0b8d2206954c9df5a&q=yellow+flowers&image_type=photo");
        data=await data.json();
        console.log(data);
    }
    render() {
        return (
            <div>
                api
            </div>
        )
    }
}
