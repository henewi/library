var myLibrary = [];

// function Book() {

// }

function addBookToLibrary() {
    myLibrary.push(document.getElementById("userinput").value);
    console.log(myLibrary)
}

var html='';
for (var i=1; i<=12; i++) {
    html+='<div>'+myLibrary[i]+'</div>';
}
document.getElementById('data').innerHTML+= html;

// document.getElementById("data").innerHTML = myLibrary;