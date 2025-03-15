const myLibrary = [];

function Book(name, author, description, chapters, read, cover) {
    if (!new.target) {
        throw Error("Must use the new operator to call the function")
    }
    this.name = name;
    this.description = description;
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
    card.classList.add("card");

    const coverImage = document.createElement("img");
    coverImage.src = cover;
    coverImage.setAttribute("width", 256)
    coverImage.setAttribute("height", 363);
    coverImage.setAttribute("alt", "Volume cover");

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("content");

    const titleHeading = document.createElement("h3");
    titleHeading.textContent = name;
    titleHeading.classList.add("title");

    const info = createCardInfo(author, chapters);

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = description;
    descriptionParagraph.classList.add("description");

    contentContainer.append(titleHeading, info, descriptionParagraph);

    card.append(coverImage, contentContainer);

    return card;

}

function createCardInfo(author, chapters) {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info");

    const authorContainer = document.createElement("div");
    authorContainer.classList.add("author-container");
    const authorParagraph = document.createElement("p");
    authorParagraph.textContent = author;
    authorParagraph.classList.add("author");
    const authorIcon = createIconImage("./assets/user.svg", 24);
    authorContainer.append(authorParagraph, authorIcon);

    const chaptersContainer = document.createElement("div");
    chaptersContainer.classList.add("chapters-container");
    const chaptersParagraph = document.createElement("p");
    chaptersParagraph.textContent = chapters;
    chaptersParagraph.classList.add("chapters");
    const chaptersIcon = createIconImage("./assets/hash.svg", 24);
    chaptersContainer.append(chaptersParagraph, chaptersIcon);

    infoContainer.append(authorContainer, chaptersContainer);

    return infoContainer;
}

function createIconImage(source, size) {
    const icon = document.createElement("img");
    icon.src = source;
    icon.width = size;
    icon.height = size;
    return icon;
}

function appendBooksToDOM() {
    const container = document.querySelector(".cards");
    for (const book of myLibrary) {
        const card = createBookCard(book.name, book.author, book.description, book.chapters, book.read, book.cover);
        console.log(book);
        container.append(card);
    }
}


addBookToLibrary("I Want To End This Love Game", "Doumoto Yuuki", 'Childhood friends who have been together since they were little. They both realize their feelings for each other, but are too close to be honest. What connects them is the "I love you game" that they have been playing since they were little. The end of their love is decided in this simple game where the winner is the one who makes the other embarrassed!', 80, false, "./assets/aishiteru.jpg");
addBookToLibrary("The Dangers In My Heart", "Sakura Norio", "Following Ichikawa Kyoutarou, a teenage boy belonging to the very bottom caste of his school, this work details his troubled interactions with a certain classmate, and his attempt to hide murderous impulses that find themselves in the darkest recesses of his soul.", 121, false, "./assets/yabai.jpg");
addBookToLibrary("Secrets Of The Gal Wife", "Kudu", "Fuyuki is a beautiful and cool gal! But there's a secret side of her that she only shows in front of her husband...?", 66, true, "./assets/gal.jpg");
addBookToLibrary("The Angel Next Door Spoils Me Rotten", "Saeki-san", "Mahiru is a beautiful girl whose classmates all call her an “angel.” Not only is she a star athlete with perfect grades—she’s also drop-dead gorgeous. Amane‚ an average guy and self-admitted slob‚ has never thought much of the divine beauty‚ despite attending the same school. Everything changes‚ however‚ when he happens to see Mahiru sitting alone in a park during a rainstorm. Thus begins the strange relationship between this incredibly unlikely pair!", 20, true, "./assets/tenshi.jpg");

appendBooksToDOM();