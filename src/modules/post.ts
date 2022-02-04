async function getResource (url: string) {

    let response = await fetch(url);

    if (response.ok) {
        return await response.json();

    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}


export default getResource;


