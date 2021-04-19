
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, BrowserRouter, Link } from 'react-router-dom';
import BooksList from './BooksList'
import BooksSearch from './BooksSearch'
class BooksApp extends React.Component {
  state = {
    books:[],
    BooksSearched:[]
  }
  constructor(props){
    super(props)
    this.changeBookShelf = this.changeBookShelf.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeBookShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
    this.componentDidMount()
  }

  searchBooks = (query) => {
    if (query.length === 0){
      this.setState({ BooksSearched: [] })
      //console.log(this.BooksSearched)
    }  
    else{
      BooksAPI.search(query).then( BooksSearched => {
        let searchResult=[];
        for (const Book of BooksSearched) {
          for (const b of this.state.books) {
              if (Book.id === b.id) {
                Book.shelf = b.shelf
              }
          }
          searchResult.push(Book)
        }
        //console.log(searchResult)
        return searchResult
      }).then((BooksSearched) => {
        this.setState((prevState) => ({ BooksSearched }))
      }).catch(()=> this.setState({ BooksSearched: [] }))
    } 
  }
  
  render(){
    return(
      <BrowserRouter>
      <div className="app">
        <Route exact path="/" render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BooksList
                books={this.state.books}
                changeBookShelf={this.changeBookShelf}
              />
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={ () => (
          <BooksSearch
            BooksSearched={this.state.BooksSearched}
            searchBooks={this.searchBooks}
            changeBookShelf={this.changeBookShelf}
          />
        )} />
      </div>
      </BrowserRouter>
    )
  } 
}

export default BooksApp