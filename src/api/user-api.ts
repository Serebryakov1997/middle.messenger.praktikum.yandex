import { IChangeProfileData, IUser } from '../models/interfaces';
import { API } from './api';

class UserAPI extends API {

    constructor() {
        super('/user');
    }

    async changeUserProfile(data: IChangeProfileData) {
        return this.http.put<IUser>('/profile', { data });
    }
}

export default new UserAPI();
