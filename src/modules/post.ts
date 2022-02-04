async function getResource (url: string) {

    let response = await fetch(url);

    if (response.ok) {
        return await response.json();

    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

type BooksItem = {
    url: string,
    name: string,
    authors: string,
    released: string
}


export {getResource, BooksItem};


