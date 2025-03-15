const myLibrary = [];

function Book(name, author, chapters, read, cover) {
    if (!new.target) {
        throw Error("Must use the new operator to call the function")
    }
    this.name = name;
    this.author = author;
    this.chapters = chapters;
    this.read = read;
    this.cover = cover;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, description, chapters, read, cover) {
    const newBook = new Book(name, author, description, chapters, read, cover);
    myLibrary.push(newBook);
}


function createBookCard(name, author, description, chapters, read, cover) {
    const card = document.createElement("article");
    card.classList.add(".card");

    const titleHeading = document.createElement("h3");
    titleHeading.textContent = name;
    titleHeading.classList.add("title");

    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = author;
    authorParagraph.classList.add("author");

    const chaptersParagraph = document.querySelector("p");
    chaptersParagraph.textContent = chapters;
    chaptersParagraph.classList.add("chapters");

    const descriptionParagraph = document.querySelector("p");
    descriptionParagraph.textContent = description;
    descriptionParagraph.classList.add("description");

}


addBookToLibrary("I Want To End This Love Game", "Doumoto Yuuki", 'Childhood friends who have been together since they were little. They both realize their feelings for each other, but are too close to be honest. What connects them is the "I love you game" that they have been playing since they were little. The end of their love is decided in this simple game where the winner is the one who makes the other embarrassed!', 80, false, "https://mangadex.org/covers/acdbf57f-bf54-41b4-8d92-b3f3d14c852e/2e239897-0808-4d2f-bc05-9e12b36b361f.jpg");
addBookToLibrary("The Dangers In My Heart", "Sakura Norio", "Following Ichikawa Kyoutarou, a teenage boy belonging to the very bottom caste of his school, this work details his troubled interactions with a certain classmate, and his attempt to hide murderous impulses that find themselves in the darkest recesses of his soul.", 121, false, "https://mangadex.org/covers/3df1a9a3-a1be-47a3-9e90-9b3e55b1d0ac/60b13fdd-6541-48e5-9181-fe1903d840f5.jpg");
addBookToLibrary("Secrets Of The Gal Wife", "Kudu", "Fuyuki is a beautiful and cool gal! But there's a secret side of her that she only shows in front of her husband...?", 66, true, "https://mangadex.org/covers/a920060c-7e39-4ac1-980c-f0e605a40ae4/07d02b26-cbd0-4323-8774-9d83579863d5.jpg");
addBookToLibrary("The Angel Next Door Spoils Me Rotten", "Saeki-san", "Mahiru is a beautiful girl whose classmates all call her an “angel.” Not only is she a star athlete with perfect grades—she’s also drop-dead gorgeous. Amane‚ an average guy and self-admitted slob‚ has never thought much of the divine beauty‚ despite attending the same school. Everything changes‚ however‚ when he happens to see Mahiru sitting alone in a park during a rainstorm. Thus begins the strange relationship between this incredibly unlikely pair!", 20, true, "https://mangadex.org/covers/2fec6641-beb1-4ae9-a32f-204dd06688ac/17ec7cbc-0e37-4ec8-ad93-5c12ed742f91.jpg");