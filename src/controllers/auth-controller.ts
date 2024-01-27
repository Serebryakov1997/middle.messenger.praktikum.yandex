import { ISigninData, ISignUpData } from '../models/interfaces';
import authApi from '../api/auth-api';
import { router, store } from '../core';
import { AddressPaths } from '../utils';

export class AuthController {
  static async signUp(data: ISignUpData) {
    try {
      await authApi.signUp(data);

      await this.fetchUser();

      router.go(AddressPaths.Chats);
    } catch (err) {
      console.error(err);
    }
  }

  static async signIn(data: ISigninData) {
    try {
      await authApi.signIn(data);
      router.go(AddressPaths.Chats);
    } catch (err) {
      console.error(err);
    }
  }

  // id: number;
  // first_name: string;
  // second_name: string;
  // display_name: string;
  // phone: string;
  // login: string;
  // avatar: string;
  // email: string;
  static async fetchUser() {
    try {
      const user = await authApi.getUser();
      const jsonUser = JSON.parse(String(user));
      store.set('user', jsonUser);
    } catch (err) {
      console.error(err);
    }
  }

  static async logout() {
    try {
      await authApi.logout();
      store.set('user', undefined);
      router.go(AddressPaths.SignIn);
    } catch (err) {
      console.log(err);
    }
  }
}
