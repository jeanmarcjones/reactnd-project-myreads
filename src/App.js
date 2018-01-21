import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ListsBooks from "./ListsBooks";
import NoMatch from "./NoMatch";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBook(book, shelf) {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf

        this.setState((state) => ({
          books: state.books.filter((b) => b.id !== book.id).concat([book])
        }))
      })
  };

  searchBooks(query) {
    BooksAPI.search(query).then(searchResults => {
      this.setState({ searchResults });
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <ListsBooks
                books={books}
                onUpdateShelf={(book, shelf) => {
                  this.updateBook(book, shelf);
                }}
                onSearch={query => {
                  this.searchBooks(query);
                }}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchBooks
                onUpdateShelf={(book, shelf) => {
                  this.updateBook(book, shelf);
                }}
                booksOnShelf={books}
              />
            )}
          />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
