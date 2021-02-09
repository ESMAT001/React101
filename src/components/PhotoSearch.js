import React, { Component } from 'react'
import SearchBar from './SearchBar';
import NavLinks from './NavLinks';
import Photos from './Photos'
export default class PhotoSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            key: "3287863-2a174c3f0b8d2206954c9df5a",
            q: "car",
            navLinks: ["car", 'sky', 'computer'],
            data: false
        }
        this.inputRef = React.createRef();
    }
    componentDidMount = () => {
        this.fetchData();
    }
    fetchData = async () => {
        let data = await fetch(`https://pixabay.com/api/?key=${this.state.key}&q=${this.state.q}&image_type=photo`);
        data = await data.json();
        // console.log(data.hits);
        this.setState({
            data: data.hits
        })
    }
    handleSearch = () => {
        let val = this.inputRef.current.value;
        if (val) {
            val = val.replace(" ", "+");
            this.inputRef.current.value = "";
            if (this.state.q !== val) {
                this.setState({
                    q: val,
                    data: false
                }, () => {
                    this.fetchData();
                })
            }
        }
    }
    handleNavLinks = (val) => {
        val = this.state.navLinks[val];
        if (this.state.q !== val) {
            this.setState({
                q: val,
                data: false
            }, () => {
                this.fetchData();
            })
        }
    }
    render() {
        const cls = "container mx-auto py-5";
        return (
            <div className={cls}>
                <SearchBar ref={this.inputRef} handleSearch={this.handleSearch} />
                <NavLinks navLinks={this.state.navLinks} handleNavLinks={this.handleNavLinks} />
                <Photos data={this.state.data} />
                <div>

                </div>
            </div>
        )
    }
}
