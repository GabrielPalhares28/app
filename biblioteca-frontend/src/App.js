
import React from 'react';
import './App.css';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1>Library</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
