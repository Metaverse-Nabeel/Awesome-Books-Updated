import Books from './module/Books.js';
import dateTime from './module/DateTime.js';

const allBooks = new Books();
const form = document.getElementById('form');
form.addEventListener('submit', () => {
  allBooks.addBook();
});

dateTime();