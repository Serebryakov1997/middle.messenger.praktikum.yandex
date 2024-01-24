import { HTTPTransport } from '../core';
import { IChangeProfileData, IUser } from '../models/interfaces';
import { IChangeProfilePasswd, ISearchUserByLogin } from '../models/interfaces/users';

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

    async changeUserAvatar(file: File) {
        console.log('file avatar: ', file);
        const data = new FormData();
        data.append('avatar', file);
        return this.http.put<IUser>('/profile/avatar', { data })
    }

    async searchUserByLogin(data: ISearchUserByLogin) {
        return this.http.post<IUser>('/search', { data });
    }
}

export default new UserAPI();
