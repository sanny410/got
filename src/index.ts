import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import Utils from "./components/Utils";
import Books from "./components/Books";
import Characters from "./components/Characters";
import Houses from "./components/Houses";

const routes = {
    '/'    : MainPage,
    '/books': Books,
    '/characters': Characters,
    '/houses': Houses
}

const router = async () => {
    const content = document.getElementById('wrapper') as HTMLElement;
    const footer = document.querySelector('footer') as HTMLElement;
    const header = document.querySelector('header') as HTMLElement;

    footer.innerHTML = await Footer.render();
    await Footer.after_render();

    header.innerHTML = await  Header.render();
    await Header.after_render();

    let request = Utils.parseRequestURL();


    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    let page = routes[parsedURL];

    content.innerHTML = await page.render();
    await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);