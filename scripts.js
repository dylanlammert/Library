const myLibrary = [];
var i = 0;
function Book(bookTitle, author, pageCount) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.bookTitle = bookTitle;
    this.author = author;
    this.pageCount = pageCount;
}

function addBookToLibrary(bookTitle, author, pageCount) {
    myLibrary.push(new Book(bookTitle, author, pageCount))
}

function createBookCard (book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const title = document.createElement("p");
    title.textContent = `Title: ${book.bookTitle}`;
    bookCard.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    bookCard.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pageCount}`;
    bookCard.appendChild(pages);

    libraryGrid.appendChild(bookCard);
}   


function displayLibrary() {
    // create a card to hold all of the 
    
}


// grab libraryGrid reference 
const libraryGrid = document.querySelector('.libraryGrid');

// grab the reference for the new book button to pop up the modal
const showModal = document.querySelector('#newBookButton');
const dialog = document.querySelector('.modal');

// grab references to the inputs from the
const bookTitleInput = document.querySelector("#bookTitle");
const authorInput = document.querySelector("#author");
const pageCountInput = document.querySelector("#pageCount");
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // finish 
    addBookToLibrary(bookTitleInput.value, authorInput.value, pageCountInput.value);
    createBookCard(myLibrary[myLibrary.length - 1]);
    form.reset();
    dialog.close();
})

showModal.addEventListener("click", () => {
    dialog.showModal();
});
 
