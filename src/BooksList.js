import React from 'react';
import BooksShelf from './BooksShelf';

class BooksList extends React.Component{
    render(){
        const { books } = this.props;
        const currentlyReading = books.filter( b => b.shelf === "currentlyReading");
        const wantToRead = books.filter(b => b.shelf === "wantToRead");
        const read = books.filter(b => b.shelf === "read");
    
        return(
            <div>
                <BooksShelf title="Currently Reading" books={currentlyReading} changeBookShelf={this.props.changeBookShelf}/>
                <BooksShelf title="Want to Read" books={wantToRead} changeBookShelf={this.props.changeBookShelf}/>
                <BooksShelf title="Read" books={read} changeBookShelf={this.props.changeBookShelf}/>
            </div>
        )
    }
}

export default BooksList