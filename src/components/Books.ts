import getResource from "../modules/post"
import BooksCard from "./BooksCard";

const Books = {
    render: async () => {
        return `
      <div id="books_page">
      </div>
        `
    },
    after_render: async () => {

        getResource("https://www.anapioficeandfire.com/api/books")
            .then(data => {
                data.forEach(({url, name, authors, released}) => {
                    console.log(data)
                    new BooksCard(url, name, authors, released, '#books_page').render();
                });
            });
    }
}

export default Books;