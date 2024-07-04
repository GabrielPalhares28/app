
import axios from 'axios';

const API_URL = 'http://localhost:8080/books';

class BookService {
  getBooks() {
    return axios.get(API_URL);
  }

  addBook(book) {
    return axios.post(API_URL, book);
  }
}

export default new BookService();
