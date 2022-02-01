"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils = {
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL: () => {
        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/");
        let request = {
            resource: '',
            id: '',
            verb: ''
        };
        request.resource = r[1];
        request.id = r[2];
        request.verb = r[3];
        return request;
    }
    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    ,
    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
exports.default = Utils;
