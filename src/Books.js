import React from 'react';

class Books extends React.Component{
  render(){
    const { book, changeBookShelf }=this.props;
    return( 
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined? book.imageLinks.thumbnail:''})`}}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf:'none'} onChange={(event) => changeBookShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
        </div>
    )
  }
}

export default Books