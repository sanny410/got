class CharacterCard {
    url: string
    name: string
    culture: string
    died: string
    parent: HTMLElement
    constructor (url: string, name: string, culture: string, died: string,  parentSelector: string) {
        this.url = url
        this.name = name
        this.culture = culture
        this.died = died
        this.parent = document.querySelector(parentSelector)!
    }

    render() {
        const element = document.createElement('div');

        element.classList.add('characters_item');
        let id: string = this.url.slice(this.url.length - 2, this.url.length);

        if (id[0] === '/') {
            id = id[1]
        }

        element.setAttribute('data-id', `${id}`);


        element.innerHTML = `
           <h3 class="title">Name: <span class="name_of_characters">${  this.name}</span></h3>
           <h3 class="title">Culture: <span class="culture_of_characters">${(  this.culture)}</span></h3>
           <h3 class="title">Died: <span class="died_of_characters">${(  this.died)}</span></h3>
           <button class="btn-select-characters">More information...</button>
        `
        this.parent.append(element);
    }

}

export default CharacterCard;