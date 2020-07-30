import React, { Component } from 'react'
import Book from '../src/Book'
import BookData from '../src/BookData'

class BookList extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: BookData,
    };
  }
  render() {
    return (
      <article>
        <h3>This is BookList</h3>
        {this.state.books.map(item => (
          <Book key={item.id} info={item}></Book>
        ))}
      </article>
    );
  }
}

export default BookList