
import './App.css';
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import React, {Component} from 'react'
import data from './data.js'

class App extends Component {
  constructor(){

  
    super()
    this.state = {
      books:  data,
      shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks =this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  


  

addToShelf = (book) => {
  console.log('hi there')

  this.setState({shelf: [...this.state.shelf, book]})
  
}

clearShelf = () => {
  this.setState({shelf: []})
}

filterBooks = (input) => {
  console.log(input)
  let filteredBooks = this.state.books
  filteredBooks = filteredBooks.filter( e => {if(e.title === input || e.author === input){ return e}})
  // for(let i = 0; i < this.state.books.length; i++){
  //   console.log(this.state.books[i].title)
  //   if(this.state.books[i].title === input || this.state.books[i].author){
  //     filteredBooks = [...filteredBooks, this.state.books[i]]
  //   }
  // }
  console.log(filteredBooks)
  this.setState({books: filteredBooks})
  
  console.log(this.state.books)

}

reset = () => {

  this.setState({books: data})
  console.log(this.state.books)
}
  render(){
    return(<div>
      <h1 className="title">bookList</h1>
      <SearchBar 
        filterBooks = {this.filterBooks}
        reset = {this.reset}/>      

      <BookList
        books = {this.state.books}
        addBook={this.addToShelf}/>
      <Shelf 
        shelf ={this.state.shelf}
        clearShelf = {this.clearShelf}/>
      
      
    </div>)
  }
}

export default App;
