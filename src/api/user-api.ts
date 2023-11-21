import { IProfileData, IUser } from '../models/interfaces';
import { API } from './api';

class UserAPI extends API {

    constructor() {
        super('/user');
    }

    async profileInfo(data: IProfileData) {
        return this.http.get<IUser>(`/user/${data}`);
    }
}

export default new UserAPI();
