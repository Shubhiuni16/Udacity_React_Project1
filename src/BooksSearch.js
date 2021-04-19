import React from 'react'
import {Link} from 'react-router-dom'
import BooksShelf from './BooksShelf'

class BooksSearch extends React.Component{
    state = {
        query: ''
    }
    Search = (query) => {
        if(query){
          this.setState({query})
        }else{
          this.setState({query:''})
        }
        this.props.searchBooks(query)
    }
    render(){ 
        const {query} = this.state;  
        let Results = (query === "")?[]:this.props.BooksSearched;   
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input   
                            value={query}
                            type="text"
                            placeholder="Search by title or author"
                            onChange={ event => this.Search(event.target.value)}      
                        />
                    </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    <BooksShelf
                        title="SEARCHED BOOKS"
                        books={ Results }
                        changeBookShelf={this.props.changeBookShelf}
                    />
                </ol>
                </div>
            </div>
        )
    }
}
export default BooksSearch