const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus ? "read" : "not read yet"}`;
}


const dialog = document.querySelector(".dialog");
const newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", ()=>{
    dialog.showModal();
});

const addBookToLibrary = () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const readCheckbox = document.querySelector("#read");

    const book = new Book(title.value, author.value, pages.value, readCheckbox.checked);

    myLibrary.push(book);
}

const closeModal = () =>{
    dialog.close();
}

const booksContainer = document.querySelector(".container");
const rerenderBooks = () =>{
    booksContainer.innerHTML = "";
    myLibrary.forEach(el => {
        const book = document.createElement("div");
        book.classList.add("book");
        const title = document.createElement("h1");
        title.textContent = el.title;
        const description = document.createElement("p");
        description.textContent = el.info();
        book.appendChild(title);
        book.appendChild(description);
        booksContainer.appendChild(book);
    })
}

const addBook = () => {
    addBookToLibrary();
    rerenderBooks();
    closeModal();
}

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", addBook);


