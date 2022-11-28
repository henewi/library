// 1. Get the data from the user 
// 2. Store that in an array 
// 3. Store the array within a library
// 4. Display each section of the library on the page
// 5. Allow the library to be recalled at any time

// .projectscont

const books = document.querySelector(".books");
// const myLibrary = [{
//     title: 'Book1',
//     author: 'me',
//     pages: 100,
//     read: true,
// },
// {
//     title: 'Book2',
//     author: 'you',
//     pages: 5000,
//     read: false,
// },
// {
//     title: 'Book3',
//     author: 'Cbum',
//     pages: 1,
//     read: true
// }];

// const myLibrary = document.getElementsByName("booktitle")[0].value;

// INPUT FROM THE USER INTO ARRAY

const myLibrary = [];
const addBook = (ev) => {
    ev.preventDefault();
    let book = {
        title: document.getElementsByName('booktitle').value,
        author: document.getElementsByName('bookauthor').value,
        pages: document.getElementsByName('bookpages').value,
    }
    books.push(book);
    document.forms[0].reset();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByName('btn').addEventListener('click', addBook);
})

// CREATING THE DOM ELEMENTS

function createBookElement(el,content,className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class",className);
    return element;
}

// PUSHING INFO TO THE CARD

function createBookItem (book, index) {
    const bookItem = document.createElement("div");
    bookItem.setAttribute("id",index)
    bookItem.setAttribute("key",index)
    bookItem.setAttribute("class", "card book")
    bookItem.appendChild(
        createBookElement("h1",'Title: ' + book.title, "book-title")
    );
    bookItem.appendChild(
        createBookElement("h1",'Author: ' + book.author, "book-author")
    );
    bookItem.appendChild(
        createBookElement("h1",'Pages: ' + book.pages, "book-title")
    );
    books.insertAdjacentElement("afterbegin", bookItem);
}

// RENDERING THE LIBRARY TO THE CARD 

function renderBooks () {
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    });
}

// RENDER & PUSH

renderBooks();

console.log("JS successfully imported.")