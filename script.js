const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("modal-button");
const span = document.getElementsByClassName("close")[0];
const form = document.querySelector("#myForm");
const authorInput = document.querySelector("#author");
const bookInput = document.querySelector("#book-name");
const pagesInput = document.querySelector("#book-pages");
const statusInput = document.querySelector("#book-status");
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
}

Book.prototype = {
  swap() {
    if (this.status === false) {
      this.status = true;
    } else {
      this.status = false;
    }
  },
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Creates book containers from objects in array and display them on page
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
    const toggleBook = document.createElement("button");

    deleteBook.setAttribute("data-index", `${i}`);
    nameAuthor.innerHTML = array[i].author.toUpperCase();
    nameBook.innerHTML = array[i].bookname.toUpperCase();
    pagesBook.innerHTML = array[i].pages.toUpperCase();
    deleteBook.innerHTML = "DELETE";
    toggleBook.innerHTML = "Toggle";
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
    displayBook.appendChild(toggleBook);

    deleteBook.addEventListener("click", () => {
      const index = deleteBook.getAttribute("data-index");
      myLibrary.splice(index, 1);
      console.log(myLibrary);
      showLibrary(myLibrary);
    });

    toggleBook.addEventListener("click", () => {
      const index = deleteBook.getAttribute("data-index");
      myLibrary[index].swap();
      console.log(myLibrary[index]);
      showLibrary(myLibrary);
    });
  }
}

function addBookToLibrary(author, book, pages, status) {
  const newBook = new Book(author, book, pages, status);
  console.log(newBook.status);
  myLibrary.push(newBook);
  showLibrary(myLibrary);
  console.log(myLibrary);
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from being submitted

  const author = authorInput.value;
  const book = bookInput.value;
  const pages = pagesInput.value;
  const status = statusInput.value;
  addBookToLibrary(author, book, pages, status);
});
