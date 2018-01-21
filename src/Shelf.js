import React from 'react'
import Book from "./Book";


function Shelf({ shelf, books, onUpdateShelf }) {
  const handleUpdate = (book, shelf) => {
    if (onUpdateShelf) {
      onUpdateShelf(book, shelf);
    }
  };
  return(
    <div key={shelf.value} className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>

      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
              <li key={book.id}>
                <Book
                  bookInfo={book}
                  onUpdateShelf={handleUpdate}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  )
}

export default Shelf
