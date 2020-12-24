import React, {Component  } from "react";

export default class SearchBar extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange = (value) => {
        this.setState({userInput: value})
        console.log('hello there')

    }

    handleClear = () => {
        this.props.reset()
        this.setState({userInput: ''})
    }

    handleClick = () => {
        this.props.filterBooks(this.state.userInput)
    }

    render(){
        return(
        <div className="searchBar">
            <input className="search" value={this.state.userInput} type="text" onChange={e => this.handleChange(e.target.value)}/>
            <button className="search" onClick={this.handleClick}>Search</button>
            <button className="search" onClick={this.handleClear}>Clear</button>
        </div>
        )}
}