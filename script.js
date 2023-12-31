// HTML elements //

const table = document.querySelector('table');
const form = document.querySelector('form');
const btn = document.querySelector('#submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#page-count');
const isRead = document.querySelector('#is-read');
const removeBtnNodes = document.querySelectorAll('.remove-btn');


// constructing book objects for the library //

let myLibrary = [];
let removeBtns = [];

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
            isRead.innerHTML = 
            `<label class="toggle">
                <input type="checkbox" checked>
                <span class="slider"></span>
            </label>`;
        } else {
            isRead.innerHTML = 
            `<label class="toggle">
                <input type="checkbox">
                <span class="slider"></span>
            </label>`;
        }
    }
}

function displayBook(book, index) {
    let row = table.insertRow(-1);
    let title = row.insertCell(0);
    let author = row.insertCell(1);
    let pages = row.insertCell(2);
    let isRead = row.insertCell(3);
    let remove = row.insertCell(4);
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pages.innerHTML = book.pages;
    if (book.isRead) {
        isRead.innerHTML = 
        `<label class="toggle">
            <input type="checkbox" checked>
            <span class="slider"></span>
        </label>`;
    } else {
        isRead.innerHTML = 
        `<label class="toggle">
            <input type="checkbox">
            <span class="slider"></span>
        </label>`;
    }
    remove.classList.add('remove');
    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'CLICK';
    removeBtn.classList.add('remove-btn');
    remove.appendChild(removeBtn);
    removeBtns.push(removeBtn);
    removeBtn.addEventListener('click', function(e) {
        removeBook(index);
    });
}

function removeBook(index) { // index = book's index in myLibrary
    myLibrary.splice(index, 1); // delete object from array
    // reformat table - delete, then re-add
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
    let len = myLibrary.length;
    for (let i = 0; i < len; ++i) {
        displayBook(myLibrary[i], i);
    }
    if (len == 0) {
        table.classList.add('empty');
        let row = table.insertRow(-1);
        let title = row.insertCell(0);
        let author = row.insertCell(1);
        let pages = row.insertCell(2);
        let isRead = row.insertCell(3);
        let remove = row.insertCell(4);
        title.innerHTML = 'Sample Title';
        author.innerHTML = 'Sample Author';
        pages.innerHTML = 100;
        isRead.innerHTML = 
        `<label class="toggle">
            <input type="checkbox">
            <span class="slider"></span>
        </label>`;
        remove.classList.add('remove');
        let removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'CLICK';
        removeBtn.classList.add('remove-btn');
        remove.appendChild(removeBtn);
        removeBtns.push(removeBtn);
        removeBtn.addEventListener('click', function(e) {
            removeBook(index);
        });
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
        if (table.classList.contains('empty')) {
            table.deleteRow(-1);
            table.classList.remove('empty');
        }
        addBookToLibrary(newBook);
        displayBook(newBook, myLibrary.length - 1);
    }
});