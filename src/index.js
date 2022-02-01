"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __importDefault(require("./components/Header"));
const MainPage_1 = __importDefault(require("./components/MainPage"));
const Footer_1 = __importDefault(require("./components/Footer"));
const Utils_1 = __importDefault(require("./components/Utils"));
const Books_1 = __importDefault(require("./components/Books"));
const Characters_1 = __importDefault(require("./components/Characters"));
const Houses_1 = __importDefault(require("./components/Houses"));
const routes = {
    '/': MainPage_1.default,
    '/books': Books_1.default,
    '/characters': Characters_1.default,
    '/houses': Houses_1.default
};
const router = () => __awaiter(void 0, void 0, void 0, function* () {
    const content = document.getElementById('wrapper');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');
    footer.innerHTML = yield Footer_1.default.render();
    yield Footer_1.default.after_render();
    header.innerHTML = yield Header_1.default.render();
    yield Header_1.default.after_render();
    let request = Utils_1.default.parseRequestURL();
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
    let page = routes[parsedURL];
    content.innerHTML = yield page.render();
    yield page.after_render();
});
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);
