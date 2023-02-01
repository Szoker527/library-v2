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

function Book(author, bookname, pages, status) {
  this.author = author;
  this.bookname = bookname;
  this.pages = pages;
  this.status = status;
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
    const displayBook = document.createElement("div");
    const nameAuthor = document.createElement("li");
    const nameBook = document.createElement("li");
    const pagesBook = document.createElement("li");
    const statusBook = document.createElement("li");
    const deleteBook = document.createElement("button");

    deleteBook.setAttribute("data-index", `${i}`);
    console.log(deleteBook.getAttribute("data-index"));
    nameAuthor.innerHTML = array[i].author;
    nameBook.innerHTML = array[i].bookname;
    pagesBook.innerHTML = array[i].pages;
    deleteBook.innerHTML = "DELETE";
    if (array[i].status === true) {
      statusBook.innerHTML = "yes";
    } else {
      statusBook.innerHTML = "no";
    }
    containerBook.appendChild(displayBook);
    displayBook.appendChild(nameAuthor);
    displayBook.appendChild(nameBook);
    displayBook.appendChild(pagesBook);
    displayBook.appendChild(statusBook);
    displayBook.appendChild(deleteBook);

    deleteBook.addEventListener("click", () => {
      const index = deleteBook.getAttribute("data-index");
      myLibrary.splice(index, 1);
      console.log(myLibrary);
      showLibrary(myLibrary);
    });
  }
}

function addBookToLibrary() {
  const inputAuthor = document.getElementById("author").value;
  const inputBook = document.getElementById("book-name").value;
  const inputPages = document.getElementById("book-pages").value;
  const inputStatus = document.getElementById("book-status").checked;
  const newBook = new Book(inputAuthor, inputBook, inputPages, inputStatus);
  myLibrary.push(newBook);
  showLibrary(myLibrary);
  console.log(inputAuthor, inputBook, inputPages, inputStatus);
  if (inputStatus === "on") {
    console.log("yes");
  }
  console.log(myLibrary);
}

sendBtn.addEventListener("click", addBookToLibrary);
