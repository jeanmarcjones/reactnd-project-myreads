import React, { Component } from 'react'
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
    ],
    showSearchPage: false
  }

  componentDidMount() {

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })

  }

  render() {

    const { books, shelves } = this.state

    return (
      <div className="app">
        {this.state.showSearchPage ? (

            <SearchBooks books={books} />

        ) : (
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
                />

              ))}
            </div>

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default BooksApp
