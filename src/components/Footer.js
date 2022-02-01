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
Object.defineProperty(exports, "__esModule", { value: true });
const Footer = {
    render: () => __awaiter(void 0, void 0, void 0, function* () {
        return `
      <div class="column">2021</div>
      <div class="column"><img src="../assets/svg/github.svg" alt="github"> <a href="https://github.com/sanny410">Visit My GitHub </a></div>
      <div class="column"><a href="https://rs.school/js/"> <img id="rs-icon" src="../assets/svg/rs_school_logo.svg" alt="rs-school-icon"></a></div>
        `;
    }),
    after_render: () => __awaiter(void 0, void 0, void 0, function* () { })
};
exports.default = Footer;
