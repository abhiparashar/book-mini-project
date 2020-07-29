import React, { Component } from 'react'
import Book from '../src/Book'

class BookList extends Component {
  state = {
    books: [
      { book: "Book number One", author: "John Doe" },
      { book: "Book number Two", author: "Bob Doe" },
      { book: "Book number Three", author: "rob Doe" },
      { book: "Book number Four", author: "peter Doe" },
      { book: "Book number Five", author: "joe Doe" }
    ],
  };
  render() {
    // const books = this.state.books.map(item => item.book)
    // console.log(books)
    return (
      <article>
        <h3>This is BookList</h3>
        {this.state.books.map((item, index) => (
          <Book key={index} info={item}></Book>
        ))}

        {/* in case of id in objects we have to pass item.id in key and no need to pass index alongwith item */}
        {/* <Book book={this.books[0]}/> */}
        {/* <Book book={this.books[1]} /> */}
      </article>
    );
  }
}

export default BookList