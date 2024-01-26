import { router, store } from '../core';
import { IChangeProfileData } from '../models/interfaces';
import { AddressPaths } from '../utils';
import userApi from '../api/user-api';
import { IChangeProfilePasswd, ISearchUserByLogin } from '../models/interfaces/users';

export class UserController {
  static async changeUserProfile(data: IChangeProfileData) {
    try {
      const newUser = await userApi.changeUserProfile(data);
      const jsonUser = JSON.parse(String(newUser));
      store.set('user', jsonUser);
      router.go(AddressPaths.Profile);
    } catch (err) {
      throw err;
    }
  }

  static async changeUserPasswd(data: IChangeProfilePasswd) {
    try {
      await userApi.changeUserPasswd(data);
      router.go(AddressPaths.Profile);
    } catch (err) {
      throw err;
    }
  }

  static async changeUserAvatar(data: File) {
    try {
      const newUser = await userApi.changeUserAvatar(data);
      const jsonUser = JSON.parse(String(newUser));
      store.set('user', jsonUser);
    } catch (err) {
      throw err;
    }
  }

  static async searchUserByLogin(data: ISearchUserByLogin) {
    try {
      const findUsers = await userApi.searchUserByLogin(data);
      const parseUsers = JSON.parse(String(findUsers));
      return parseUsers;
    } catch (err) {
      throw err;
    }
  }
}
