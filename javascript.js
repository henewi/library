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
const myLibrary = []

function createBookItem (book,index) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('id',index)
    bookItem.setAttribute('key',index)
}

function renderBooks () {
    myLibrary.map((book,index)) => {
        createBookItem(book,index)
    }
}