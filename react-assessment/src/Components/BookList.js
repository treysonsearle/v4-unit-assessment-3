import React, {Component} from 'react';


export default class BookList extends Component{
    constructor(){
        super()


    }

    render(){
        let mappedBooks = this.props.books.map(e => ({title: e.title, author: e.author, img: e.img}))
        return (
                <div className="book-list">
                    {mappedBooks.map((book => 
                        <div className="book">
                            <img key={book.id} onClick= {() => {this.props.addBook(book); console.log(book)}} src={book.img}/>
                            <p key={book.id} >{book.title}</p>
                        
                            <p key={book.id}>{book.author}</p>

                        
                        </div>))}
                    
                </div>
                
            )
    }
}   
