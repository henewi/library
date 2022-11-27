// 1. Get the data from the user 
// 2. Store that in an array 
// 3. Store the array within a library
// 4. Display each section of the library on the page
// 5. Allow the library to be recalled at any time

// .projectscont

const books = document.querySelector(".books");
var myLibrary = {title: "book1", author: "dingleberry", pages: 2, read: true,}

function createBookElement(el,content,className) {
    const element = document.createElement(el);
    element.textcontent = content;
    element.setAttribute("class",className);
    return element;
}

function createBookItem (book, index) {
    const bookItem = document.createElement("div");
    bookItem.setAttribute("id",index)
    bookItem.setAttribute("key",index)
    bookItem.setAttribute("class", "card book")
    bookItem.appendChild(
        createBookElement("h1",'Title:' + book.title, "book-title")
    );
    bookItem.appendChild(
        createBookElement("h1",'Author:' + book.author, "book-author")
    );
    bookItem.appendChild(
        createBookElement("h1",'Pages:' + book.title, "book-title")
    );
    books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks () {
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    });
}

renderBooks();

console.log("JS successfully imported.")