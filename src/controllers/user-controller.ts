import userApi from '../api/user-api';
import { router } from '../core';
import { IProfileData } from '../models/interfaces';
import { AddressPaths } from '../utils';

export class UserController {

    static async profileInfo(data: IProfileData) {
        try {
            const response = await userApi.profileInfo(data);
            console.log('response: ', response);

            router.go(AddressPaths.Profile);
        } catch (err) {
            console.log(err, 'settings error');
        }
    }
}
