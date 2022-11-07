var myLibrary = [];

// function Book() {

// }

function addBookToLibrary() {
    myLibrary.push(document.getElementById("userinput").value);
    console.log(myLibrary)
}

document.getElementById("data").innerHTML = myLibrary;