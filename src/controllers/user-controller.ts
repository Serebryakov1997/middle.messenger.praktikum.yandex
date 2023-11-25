import userApi from '../api/user-api';
import { router, store } from '../core';
import { IChangeProfileData, IProfileData } from '../models/interfaces';
import { AddressPaths } from '../utils';

export class UserController {

    static async changeUserProfile(data: IChangeProfileData) {
        try {
            const newUser = await userApi.changeUserProfile(data);
            store.set('user', newUser);
            router.go(AddressPaths.ProfileChangeData);
        } catch (err) {
            console.log(err, 'change user profile error');
        }
    }
}
