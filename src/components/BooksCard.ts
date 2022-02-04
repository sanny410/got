class BooksCard {
    url: string
    name: string
    authors: string[]
    released: string
    parent: HTMLElement
    constructor (url: string, name: string, authors: string[], released: string, parentSelector: string) {
        this.url = url
        this.name = name
        this.authors = authors
        this.released = released
        this.parent = document.querySelector(parentSelector)!
    }

    render() {
        const element = document.createElement('div');

        element.classList.add('books_item');
        let id: string = this.url.slice(this.url.length - 2, this.url.length);

        if (id[0] === '/') {
            id = id[1]
        }

        element.setAttribute('data-id', `${id}`);


        element.innerHTML = `
           <img class="books_item_image" src="../assets/books/${id}.jpg" alt="">
           <h3 class="title">Name of Book</h3>
           <p class="name_of_book">${this.name}</p>
           <h3 class="title">Author</h3>
           <p class="author_of_book">${this.authors[0]}</p>
           <h3 class="title">Released</h3>
           <p class="date_of_book">${(this.released).slice(0,4)}</p>
           <button class="btn-select-book">More information...</button>
        `
        this.parent.append(element);
    }

}

export default BooksCard;