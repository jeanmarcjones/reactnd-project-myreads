import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListsBooks from './ListsBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    books: [],
  }

  componentDidMount() {

    this.getBooks()

  }

  getBooks() {

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })

  }

  updateBook(book, shelf) {

    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })

  }

  searchBooks(query) {

    BooksAPI.search(query).then((searchResults) => {
      this.setState({ searchResults })
    })

  }

  render() {

    const { books, searchResults } = this.state

    return (

      <div className="app">

        <Route exact path="/" render={() => (

            <ListsBooks
              books={books}
              onUpdateShelf={(book, shelf) => {
                this.updateBook(book, shelf)
              }}
              onSearch={(query) => {
                this.searchBooks(query)
              }}
            />

          )}
        />

        <Route path="/search" render={() => (

            <SearchBooks
              onUpdateShelf={(book, shelf) => {
                this.updateBook(book, shelf)
              }}
            />

          )}
        />

      </div>

    )
  }

}

export default BooksApp
