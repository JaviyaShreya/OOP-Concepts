class Book{
    #author;
    #name;

    constructor(author,name){
        this.#author = author;
        this.#name = name;
    }

    showbookInfo(){
        console.log("Tittle: " + this.#name);
        console.log("Author: " + this.#author);
    }
}

const book = new Book("The Alchemist", "Paulo Coelho");
book.showbookInfo();