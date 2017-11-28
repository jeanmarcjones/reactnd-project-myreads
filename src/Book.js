import React from "react";

function Book (props)  {

  const handleChange = e => {
    e.preventDefault();

    if (props.onUpdateShelf) {
      props.onUpdateShelf(props.bookInfo, e.target.value);
    }
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(http://books.google.com/books/content?id=${
              props.bookInfo.id
            }&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api)`
          }}
        />

        <div className="book-shelf-changer">
          <select value={props.bookInfo.shelf} onChange={e => handleChange(e)}>
            <option value="none" disabled>
              Move to...
            </option>

            <option value="currentlyReading">Currently Reading</option>

            <option value="wantToRead">Want to Read</option>

            <option value="read">Read</option>

            <option value="none">None</option>
          </select>
        </div>
      </div>

      <div className="book-title">{props.bookInfo.title}</div>

      <div className="book-authors">
        {props.bookInfo.authors &&
        props.bookInfo.authors.map(
            (author, index) =>
              `${author}${props.bookInfo.authors[index + 1] ? ", " : ""}`
          )}
      </div>
    </div>
  );
}

export default Book;
