import { HTTPTransport } from '../core';

export abstract class API {
    http: HTTPTransport;

    constructor(path: string) {
        this.http = new HTTPTransport(path);
    }
}
