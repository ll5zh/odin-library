// HTML elements //

const table = document.querySelector('table');
const form = document.querySelector('form');
const btn = document.querySelector('#submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#page-count');
const isRead = document.querySelector('#is-read');


// constructing book objects for the library //

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayLibrary() {
    for (let book of myLibrary) {
        let row = table.insertRow(-1);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let isRead = row.insertCell(3);
        title.innerHTML = book.title;
        author.innerHTML = book.author;
        pages.innerHTML = book.pages;
        if (book.isRead) {
            isRead.innerHTML = 'Read';
        } else {
            isRead.innerHTML = 'Not Read';
        }
    }
}

function displayBook(book) {
    let row = table.insertRow(-1);
    let title = row.insertCell(0);
    let author = row.insertCell(1);
    let pages = row.insertCell(2);
    let isRead = row.insertCell(3);
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pages.innerHTML = book.pages;
    if (book.isRead) {
        isRead.innerHTML = 'Read';
    } else {
        isRead.innerHTML = 'Not Read';
    }
}


// adding books to library //

form.addEventListener('submit', function(event) {
    event.preventDefault();
});
btn.addEventListener('click', function(e) {
    if (title.checkValidity() && author.checkValidity() && pages.checkValidity() && isRead.checkValidity()) {
        let newBook = new Book(title.value, author.value, pages.value, true);
        if (isRead.value == 'not-read') {
            newBook.isRead = false;
        }
        addBookToLibrary(newBook);
        displayBook(newBook);
    }
});


// display books in library //

const tml = new Book('The Midnight Library', 'Matt Haig', 304, true);
addBookToLibrary(tml);
displayLibrary();