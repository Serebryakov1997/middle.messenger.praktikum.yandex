import { router, store } from '../core';
import { IChangeProfileData } from '../models/interfaces';
import { AddressPaths } from '../utils';
import userApi from '../api/user-api';
import { IChangeProfilePasswd } from '../models/interfaces/users';


export class UserController {

    static async changeUserProfile(data: IChangeProfileData) {
        try {
            const newUser = await userApi.changeUserProfile(data);
            store.set('user', newUser);
            router.go(AddressPaths.Profile);
        } catch (err) {
            console.log(err, 'change user profile error');
        }
    }

    static async changeUserPasswd(data: IChangeProfilePasswd) {
        try {
            await userApi.changeUserPasswd(data);
            router.go(AddressPaths.Profile);
        } catch (err) {
            console.log(err, 'change user passwd error');
        }
    }
}
