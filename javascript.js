var myLibrary = [];

function addBookToLibrary() {
    myLibrary.push(document.getElementById("userinput").value);
    console.log(myLibrary)
}


function Book() {
    var page='';
    for (var i=0; i<Book.length; i++) {
        page+='<br>'+myLibrary[i]+'</div>';
    }
    return html;
}
document.getElementById('data').innerHTML+= html;

// document.getElementById("data").innerHTML = myLibrary;