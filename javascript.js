// 1. Get the data from the user 
// 2. Store that in an array 
// 3. Store the array within a library
// 4. Display each section of the library on the page
// 5. Allow the library to be recalled at any time

//-----------------------------------------------------------------

// var myLibrary = [];

// function addBookToLibrary() {
//     myLibrary.push(document.getElementById("userinput").value);
//     document.getElementById("data").innerHTML = myLibrary;
// }

// function insert() {
//     title.push(titleInput.value);
//     author.push(authorInput.value);
//     pages.push(pagesInput.value);
// }

// var titleInput = []

// function newBook(title) {
//     titleInput.push(title);
//     console.log("bookInfo");
// }

//-----------------------------------------------------------------

// const details = {
//     firstname: 'Henry',
//     lastname: 'Dunn',
//     age: '19',
//     "favnum": function() {
//         console.log(99-30);
//     }
// }

// console.log(details.firstname);
// console.log(details["favnum"]);

// .projectscont

const books = document.querySelector('projectscont')
const myLibrary = [{
    title: 'Book1',
    author: 'me',
    pages: 500,
    read: true,
},
{
    title: 'Book2',
    author: 'you',
    pages: 5000,
    read: false,
},];

function createBookElement(el,content,className) {
    const element = document.createElement(el);
    element.textcontent = content;
    element.setAttribute("class",className);
    return element;
}

function createBookItem (book,index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id',index)
    bookItem.setAttribute('key',index)
    bookItem.setAttribute('class', 'card book')
    bookItem.appendChild(
        createBookElement('h1',"Title:" + book.title, 'book-title')
    );
    bookItem.appendChild(
        createBookElement('h1',"Author:" + book.author, 'book-author')
    );
    bookItem.appendChild(
        createBookElement('h1',"Pages:" + book.title, 'book-title')
        books.insertAdjacentElement("afterbegin", bookItem);
    );
}

function renderBooks () {
    myLibrary.map((book, index) => {
        createBookItem(book, index);
    });
}

renderBooks()