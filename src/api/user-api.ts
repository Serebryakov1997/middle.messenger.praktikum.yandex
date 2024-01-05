import { HTTPTransport } from '../core';
import { IChangeProfileData, IUser } from '../models/interfaces';
import { IChangeProfilePasswd } from '../models/interfaces/users';

class UserAPI {

    http: HTTPTransport;

    constructor() {
        this.http = new HTTPTransport('/user');
    }

    async changeUserProfile(data: IChangeProfileData) {
        return this.http.put<IUser>('/profile', { data });
    }

    async changeUserPasswd(data: IChangeProfilePasswd) {
        return this.http.put('/password', { data });
    }
}

export default new UserAPI();
