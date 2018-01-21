import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

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
            <Shelf
              key={shelf.value}
              shelf={shelf}
              books={books.filter(book => book.shelf === shelf.value)}
              onUpdateShelf={this.handleUpdate}
            />
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
