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

let count = 0;

const createBookButtons = (parent) => {
    const bookButtonsContainer = document.createElement("div");
    bookButtonsContainer.classList.add("buttons-container");
    const statusBtn = document.createElement("button");
    statusBtn.textContent = "Change status";
    statusBtn.setAttribute("type", "button");
    statusBtn.setAttribute("id", "statusBtn");
    statusBtn.setAttribute("data-btn", `${count}`);
    statusBtn.classList.add("btn");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete book";
    deleteBtn.classList.add("btn");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.setAttribute("data-btn", `${count}`);

    bookButtonsContainer.appendChild(statusBtn);
    bookButtonsContainer.appendChild(deleteBtn);

    bookButtonsContainer.addEventListener("click", (e) => {
        const target = e.target;
        switch (target.id) {
            case "statusBtn":
                let readStatus = myLibrary[statusBtn.getAttribute("data-btn")].readStatus;
                myLibrary[statusBtn.getAttribute("data-btn")].readStatus = readStatus ? false : true;
                rerenderBooks();
                break;
            case "deleteBtn":
                
                break;
        }
    });

    parent.appendChild(bookButtonsContainer);

}

const rerenderBooks = () =>{
    booksContainer.innerHTML = "";
    count=0;
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
        createBookButtons(book);
        count++;
    })
}

const addBook = () => {
    addBookToLibrary();
    rerenderBooks();
    closeModal();
}

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", addBook);


