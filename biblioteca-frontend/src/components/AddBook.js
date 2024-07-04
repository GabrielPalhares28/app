
import React, { useState } from 'react';
import BookService from '../services/BookService';

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', isbn: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    BookService.addBook(book).then(() => {
      setBook({ title: '', author: '', isbn: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
      <input type="text" name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
