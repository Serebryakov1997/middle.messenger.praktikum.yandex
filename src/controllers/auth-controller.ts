import { ISigninData, ISignUpData } from '../models/interfaces';
import authApi from '../api/auth-api';
import { router, store } from '../core';
import { AddressPaths, Auth } from '../utils';
// import { ChatController } from './chat-controller';


export class AuthController {

    static async signUp(data: ISignUpData) {
        try {
            const response = await authApi.signUp(data);
            console.log('response: ', response);
            // ChatController.getChats();

            await this.fetchUser();

            router.go(AddressPaths.Chats);
        } catch (err) {
            console.log(err, 'signup error');
        }
    }

    static async signIn(data: ISigninData) {
        try {
            const response = await authApi.signIn(data);
            console.log('login response: ', response);

            // ChatController.getChats();

            await this.fetchUser();

            router.go(AddressPaths.Chats);
        } catch (err) {
            console.log(err, 'signin error');
        }
    }

    static async fetchUser() {
        try {
            const user = await authApi.getUser();
            store.set('user', user);
        } catch (err) {
            throw err;
        }
    }

    static async logout() {
        try {
            const response = await authApi.logout();
            console.log('response: ', response);
            store.set('user', undefined);
            router.go(AddressPaths.SignIn);
        } catch (err) {
            console.log(err, 'logout err');
        }
    }
}
