var myLibrary = [];

// function Book() {

// }

function addBookToLibrary() {
    myLibrary.push(document.getElementById("userinput").value);
    console.log(myLibrary)
}

var data = document.getElementById("data");
myLibrary.forEach(function(element) {
    var userinput = document.create('div');
    userinput.innerHTML = element.userinout;
    data.appendChild(userinput);
})