import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Book extends Component {

  static protoTypes = {
  bookInfo: PropTypes.array.isRequired
}

  render() {

    const { bookInfo } = this.props

    return (

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 188,
            backgroundImage: `url(http://books.google.com/books/content?id=${bookInfo.id}&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api)`
          }}></div>

          <div className="book-shelf-changer">
            <select value={bookInfo.shelf.readOnly}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">{bookInfo.title}</div>

        <div className="book-authors">
          {bookInfo.authors.map((author, index) => (

            `${author}${bookInfo.authors[index + 1] ? ', ' :''}`

          ))}
        </div>
      </div>

    )

  }

}

export default Book