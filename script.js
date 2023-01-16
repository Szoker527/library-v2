const send_btn = document.getElementById('submit-button');


send_btn.addEventListener("click", addBookToLibrary)

















let myLibrary = [];

function Book(author, bookname) {
    this.author = author;
    this.bookname = bookname;
  // the constructor...
}

function addBookToLibrary() {
    let inputAuthor = document.getElementById('author').value;
    let inputBook = document.getElementById('book-name').value; 
    let newBook = new Book(inputAuthor, inputBook);
    myLibrary.push(newBook);
    console.log(inputAuthor, inputBook);
    console.log(myLibrary[0]);
}
