import { Router } from './utils';
import {
  Login,
  Chats,
  Register,
  Profile,
  ProfileChangeData,
  ProfileChangePasswd,
} from './views';


document.addEventListener('DOMContentLoaded', () => {
  const router = new Router();
  router
    .use('/', new Login(), {})
    .use('/messenger', new Chats(), {})
    .use('/sign-up', new Register(), {})
    .use('/settings', new Profile(), {})
    .use('/settings_change_data', new ProfileChangeData(), {})
    .use('/settings_change_passwd', new ProfileChangePasswd(), {})
    .start();
});
