const myLibrary = [];

function Book(name, author, pages, read, cover) {
    if (!new.target) {
        throw Error("Must use the new operator to call the function")
    }
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.cover = cover;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages, read, cover) {
    const newBook = new Book(name, author, pages, read, cover);
    myLibrary.push(newBook);
}

