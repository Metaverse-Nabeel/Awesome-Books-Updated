import Book from './book.js';

class Books {
  constructor() {
    this.booksList = document.getElementById('booksList');
    this.bookTitle = document.getElementById('bookTitle');
    this.bookAuthor = document.getElementById('bookAuthor');
    this.form = document.getElementById('form');
    this.booksArray = [];
    if (localStorage.getItem('AwesomeBooks')) {
      this.booksArray = JSON.parse(localStorage.getItem('AwesomeBooks'));
      this.displayBooks();
    }
    this.booksTab = document.getElementById('booksTab');
    this.addBookTab = document.getElementById('addBookTab');
    this.contactTab = document.getElementById('contactTab');
    this.booksSection = document.getElementById('books');
    this.addBookSection = document.getElementById('addBook');
    this.contactSection = document.getElementById('contact');
    this.booksTab.addEventListener('click', () => this.showBooksSection());
    this.addBookTab.addEventListener('click', () => this.showAddBookSection());
    this.contactTab.addEventListener('click', () => this.showContactSection());
  }

  saveToLocalStorage = () => {
    localStorage.setItem('AwesomeBooks', JSON.stringify(this.booksArray));
  };

  addBook = () => {
    const title = this.bookTitle.value;
    const author = this.bookAuthor.value;
    const book = new Book(title, author);
    this.booksArray.push(book);
    this.saveToLocalStorage();
    this.displayBooks();
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }

  removeBook = (book) => {
    this.booksArray = this.booksArray.filter((currentBook) => currentBook !== book);
    this.saveToLocalStorage();
    this.displayBooks();
  };

  displayBooks = () => {
    this.booksList.innerHTML = '';
    this.booksArray.forEach((book) => {
      const li = document.createElement('li');
      li.innerHTML = `"${book.bookTitle}" by ${book.bookAuthor}`;
      const remove = document.createElement('button');
      remove.classList.add('remove');
      remove.innerHTML = 'Remove';
      remove.addEventListener('click', () => this.removeBook(book));
      li.appendChild(remove);
      this.booksList.appendChild(li);
    });
  }

  showBooksSection() {
    this.booksTab.classList.add('activeNavItem');
    this.addBookTab.classList.remove('activeNavItem');
    this.contactTab.classList.remove('activeNavItem');
    this.booksSection.classList.add('active');
    this.addBookSection.classList.remove('active');
    this.contactSection.classList.remove('active');
  }

  showAddBookSection() {
    this.booksTab.classList.remove('activeNavItem');
    this.addBookTab.classList.add('activeNavItem');
    this.contactTab.classList.remove('activeNavItem');
    this.booksSection.classList.remove('active');
    this.addBookSection.classList.add('active');
    this.contactSection.classList.remove('active');
  }

  showContactSection() {
    this.booksTab.classList.remove('activeNavItem');
    this.addBookTab.classList.remove('activeNavItem');
    this.contactTab.classList.add('activeNavItem');
    this.booksSection.classList.remove('active');
    this.addBookSection.classList.remove('active');
    this.contactSection.classList.add('active');
  }
}

export default Books;