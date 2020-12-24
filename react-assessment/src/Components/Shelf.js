import React, {Component  } from "react";

export default class Shelf extends Component {
    constructor(){
        super()
    }

    render(){
    
      let mappedTitles = this.props.shelf.map(e => e.title)
        return (
            
            <div className="shelf">
                <h1 className="your-shelf">your shelf</h1>
                <button className="shelf-button" onClick={() => this.props.clearShelf()}>Clear Shelf</button>
                {mappedTitles.map((title => <p className="book-title">{title}</p>))}
            </div>

        )
        }
}