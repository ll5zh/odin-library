// constructing book objects for the library

let myLibrary = [];

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


// testing via console.log
console.log(myLibrary);
const tml = new Book('The Midnight Library', 'Matt Haig', 304, true);
console.log(Book);
console.log(tml);
addBookToLibrary(tml);
console.log(myLibrary);