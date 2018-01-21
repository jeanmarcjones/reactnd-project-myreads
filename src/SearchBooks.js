import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { _ } from "underscore";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired,
    booksOnShelf: PropTypes.array.isRequired
  };

  state = {
    query: "",
    searchResults: []
  };

  handleUpdate = (book, shelf) => {
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(book, shelf);
    }
  };

  updateQuery = query => {
    this.setState({ query });

    if (query.length > 0) {
      _.debounce(
        BooksAPI.search(query.trim())
          .then(searchResults => {
            this.updateBooks(searchResults);
          })
          .catch(() => {
            // Hides previous search results
            this.setState({ searchResults: [] })
          }), 750);
    } else {
      // Clears results if search terms deleted
      this.setState({ searchResults: [] })
    }
  };

  updateBooks = books => {
    const verifiedBooks = books.map(book => {
      this.props.booksOnShelf.forEach(bookOnShelf => {
        // check weather book is already on shelf
        if (book.id === bookOnShelf.id) {
          // if yes get the shelf data from BooksOnShelf
          book.shelf = bookOnShelf.shelf;
        }
      });

      return book;
    });

    this.setState({
      searchResults: verifiedBooks
    });
  };

  render() {
    const { query, searchResults } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {/*
             NOTES: The search from BooksAPI is limited to a particular set of search terms.
             You can find these search terms here:
             https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

             However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
             you don't find a specific author or title. Every search is limited by search terms.
             */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchResults.length > 0 && (
            <ol className="books-grid">
              {searchResults.map(book => (
                <li key={book.id}>
                  <Book bookInfo={book} onUpdateShelf={this.handleUpdate} />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
