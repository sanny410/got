import {getResource, BooksItem} from "../modules/post"
import CharacterCard from "./CharacterCard";

const Characters = {
    render: async () => {
        return `
        <div id="characters_page">
            
        </div>
        `
    },
    after_render: async () => {

        for (let i = 0; i <= 2138; i++) {
            getResource(`https://www.anapioficeandfire.com/api/characters/${i}`)
                .then(data => {
                    if (data.name !== '' && data.culture !== '') {
                        console.log(data)
                        new CharacterCard(data.url, data.name, data.culture, data.died, '#characters_page').render();
                    }
                });
        }
    }
}

export default Characters;