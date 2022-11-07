// var myLibrary = [];

// function addBookToLibrary() {
//     myLibrary.push(document.getElementById("userinput").value);
//     document.getElementById("data").innerHTML = myLibrary;
// }

function insert() {
    title.push(titleInput.value);
    author.push(authorInput.value);
    pages.push(pagesInput.value);
}

var titleInput = []

function newBook(title) {
    titleInput.push(title);
    console.log("bookInfo");
}