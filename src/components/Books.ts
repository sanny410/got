import {getResource} from "../modules/post"
import BooksCard from "./BooksCard";

const Books = {
    render: async () => {
        return `
      <div id="books_page">
      </div>
        `
    },
    after_render: async () => {

        for (let i = 0; i <= 12; i++) {
            getResource(`https://www.anapioficeandfire.com/api/books/${i}`)
                .then(data => {
                    new BooksCard(data.url, data.name, data.authors, data.released, '#books_page').render();
                    });
        }
    }
}

export default Books;