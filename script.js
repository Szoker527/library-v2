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

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function showLibrary(array) {
  const containerBook = document.querySelector("#displayBook");
  removeAllChildNodes(containerBook);

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = array[i].author + " - " + array[i].bookname;
    containerBook.appendChild(li);
  }

  console.log(containerBook);
}

function addBookToLibrary() {
  const inputAuthor = document.getElementById("author").value;
  const inputBook = document.getElementById("book-name").value;
  const newBook = new Book(inputAuthor, inputBook);
  myLibrary.push(newBook);
  showLibrary(myLibrary);
  console.log(inputAuthor, inputBook);
  console.log(myLibrary);
}

sendBtn.addEventListener("click", addBookToLibrary);
