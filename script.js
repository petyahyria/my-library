const myLibrary = [];

function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype.info = function() {
    return `${title} by ${author}, ${pages} pages, ${readStatus ? "read" : "not read yet"}`;
}

const addBookToLibrary = () => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const readCheckbox = document.querySelector("#read");

    const book = new Book(title.value, author.value, pages.value, readCheckbox.checked);

    myLibrary.push(book);
}

const dialog = document.querySelector(".dialog");
const newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", ()=>{
    dialog.showModal();
});



