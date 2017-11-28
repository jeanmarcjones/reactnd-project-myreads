import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  };

  handleUpdate = (book, shelf) => {
    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(book, shelf);
    }
  };

  render() {
    const { books } = this.props;

    const shelves = [
      {
        value: "currentlyReading",
        title: "Currently Reading"
      },
      {
        value: "wantToRead",
        title: "Want To Read"
      },
      {
        value: "read",
        title: "Read"
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {shelves.map(shelf => (
            <div key={shelf.value} className="bookshelf">
              <h2 className="bookshelf-title">{shelf.title}</h2>

              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(book => book.shelf === shelf.value)
                    .map(book => (
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
          ))}
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelf;
