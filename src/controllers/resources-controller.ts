import resourcesApi from '../api/resources-api';
import { store } from '../core';
import { AuthController } from './auth-controller';

export class RecourcesController {

    static async getStaticFiles() {
        try {
            await AuthController.fetchUser();
            const user = JSON.parse(JSON.stringify(store.getState().user));
            // console.log('avatar in getStaticFiles: ', user.avatar);
            const response = await resourcesApi.getStaticFile(user.avatar);
            // console.log('response: ', typeof response);
            store.set('image', response);
        } catch (err) {
            throw err;
        }
    }
}
