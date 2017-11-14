import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    shelves: [
      {
        value: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        value: 'wantToRead',
        title: 'Want To Read'
      },
      {
        value: 'read',
        title: 'Read'
      }
    ]
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

  render() {

    const { books, shelves } = this.state

    return (

      <div className="app">

        <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <div className="list-books-content">
                {shelves.map((shelf) => (

                  <BookShelf
                    key={shelf.value}
                    books={books.filter((book) => book.shelf === shelf.value)}
                    shelfInfo={shelf}
                    onUpdateShelf={(book, shelf) => {
                      this.updateBook(book, shelf)
                    }}
                  />

                ))}
              </div>

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />

        <Route path="/search" render={() => (
            <SearchBooks
              books={books}
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
