import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfInfo: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  }

  handleUpdate = (book, shelf) => {

    if(this.props.onUpdateShelf) {
      this.props.onUpdateShelf(book, shelf)
    }

  }

  render() {

    const { books, shelfInfo } = this.props

    return(

      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfInfo.title}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (

                <li key={book.id}>
                  <Book
                    bookInfo={book}
                    onUpdateShelf={this.handleUpdate}
                  />
                </li>

            ))}
          </ol>
        </div>
      </div>

    )

  }

}

export default BookShelf