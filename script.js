// HTML elements
const table = document.querySelector('table');

// constructing book objects for the library

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


// testing via console.log
console.log(myLibrary);
const tml = new Book('The Midnight Library', 'Matt Haig', 304, true);
console.log(Book);
console.log(tml);
addBookToLibrary(tml);
console.log(myLibrary);
displayLibrary();