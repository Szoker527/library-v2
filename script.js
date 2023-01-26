const sendBtn = document.getElementById("submit-button");
const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("modal-button");
const span = document.getElementsByClassName("close")[0];

// Modal start
modalBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// Modal ends

const myLibrary = [];

function Book(author, bookname) {
  this.author = author;
  this.bookname = bookname;
  // the constructor...
}

function addBookToLibrary() {
  const inputAuthor = document.getElementById("author").value;
  const inputBook = document.getElementById("book-name").value;
  const newBook = new Book(inputAuthor, inputBook);
  myLibrary.push(newBook);
  console.log(inputAuthor, inputBook);
  console.log(myLibrary[0]);
}

sendBtn.addEventListener("click", addBookToLibrary);
