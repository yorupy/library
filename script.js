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

addBookToLibrary("I Want To End This Love Game", "Doumoto Yuuki", 200, false, "https://mangadex.org/covers/acdbf57f-bf54-41b4-8d92-b3f3d14c852e/2e239897-0808-4d2f-bc05-9e12b36b361f.jpg");
addBookToLibrary("The Dangers In My Heart", "Sakura Norio", 300, false, "https://mangadex.org/covers/3df1a9a3-a1be-47a3-9e90-9b3e55b1d0ac/60b13fdd-6541-48e5-9181-fe1903d840f5.jpg");
addBookToLibrary("Secrets Of The Gal Wife", "Kudu", 400, true, "https://mangadex.org/covers/a920060c-7e39-4ac1-980c-f0e605a40ae4/07d02b26-cbd0-4323-8774-9d83579863d5.jpg");
addBookToLibrary("The Angel Next Door Spoils Me Rotten", "Saeki-san", 500, true, "https://mangadex.org/covers/2fec6641-beb1-4ae9-a32f-204dd06688ac/17ec7cbc-0e37-4ec8-ad93-5c12ed742f91.jpg");