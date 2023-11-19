import { ISigninData, ISignUpData } from '../models/interfaces';
import authApi from '../api/auth-api';
import { Block, router, store } from '../core';
import { Auth, validationError } from '../utils';
import { ChatController } from './chat-controller';
import { validators } from '../models/validators';

export class AuthController {

    static async signUp(data: ISignUpData) {
        // pass data to validation (in models) and get valid data or throw Error
        try {
            await authApi.signUp(data);

            ChatController.getChats();

            // await this.fetchUser();

            // router.go('/chats');
        } catch (err) {
            console.log(err, 'signup error');
        }
    }

    static async signIn(
        data: ISigninData,
        childrens: Record<string, Record<string, Block>>,
        event: Event
    ) {
        try {
            // validate data
            const { login, password } = data;
            let isValids: { [key: string]: boolean } = {};

            isValids.login = (<RegExp>validators.login.rule).test(login);
            isValids.password = (<RegExp>validators.password.rule).test(password);
            for (const [key, value] of Object.entries(isValids)) {
                if (!value) {
                    validationError(childrens[key], <string>validators[key].errorMsg);
                    event.preventDefault();
                }
            }

            await authApi.signIn(data);

            ChatController.getChats();

            await this.fetchUser();

            router.go('/chats');
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
            await authApi.logout();
            store.set('user', undefined);
            router.go(Auth.SignIn);
        } catch (err) {
            console.log(err, 'logout err');
        }
    }
}
