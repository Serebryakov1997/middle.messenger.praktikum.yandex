import { HTTPTransport } from '../core';
import { ISigninData, ISignUpData, IUser } from '../models/interfaces';


class AuthAPI {

    http: HTTPTransport;

    constructor() {
        this.http = new HTTPTransport('/auth');
    }

    async signUp(data: ISignUpData) {
        return this.http.post('/signup', { data });
    }
    async signIn(data: ISigninData) {
        return this.http.post('/signin', { data });
    }

    async logout() {
        return this.http.post('/logout');
    }

    async getUser() {
        return this.http.get<IUser>('/user');
    }
}


export default new AuthAPI();
