
import React, { useEffect, useState } from 'react';
import BookService from '../services/BookService';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
