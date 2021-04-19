import React from 'react'
import Books from './Books'

class BooksShelf extends React.Component{
    render(){
        const { books, changeBookShelf }=this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">{
                        books.map( b => (
                            <li key={b.id}> 
                             <Books book={b} changeBookShelf={changeBookShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

        )
    }
}
export default BooksShelf