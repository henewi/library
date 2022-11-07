var myLibrary = [];

function addBookToLibrary() {
    myLibrary.push(document.getElementById("userinput").value);
    console.log(myLibrary)
}


function Book() {
    var html='';
    for (var i=1; i<=12; i++) {
        html+='<div>'+myLibrary[i]+'</div>';
    }
    return html;
}
document.getElementById('data').innerHTML+= html;

// document.getElementById("data").innerHTML = myLibrary;