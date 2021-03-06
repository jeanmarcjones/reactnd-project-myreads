# MyReads Project

My project submission for Udacity's React Fundamentals course. It allows you to search for books and add them to three
different shelves Currently Reading, Want To Read and Read.

I was provided with a template containing the CSS and HTML markup for the project, I was tasked with writing the react
code to complete the project. The initial project files are
[here](https://github.com/udacity/reactnd-project-myreads-starter).

## Getting started

To view the project you must:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

You may use `npm` instead of `yarn` to install dependencies and start the development server.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can
be found in [`SEARCH_TERMS.md`](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the
backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Supported Node versions

It's recommended to use Node 8 for this project. Though newer versions have been tested but cause build errors.

Tested versions:
* 8.16.0
* 10.15.3
* 12.0.0

## Back-end Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file
[`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set
higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have
the correct state while on the search page.

## Contributing

This repository is a personal project. Therefore, pull requests will not be accepted.

## Licence

This project is licensed under the Unlicense license.
