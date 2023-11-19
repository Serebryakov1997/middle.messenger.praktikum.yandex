// import { AuthController } from './controllers/auth-controller';
import { router } from './core';
import { Auth, Users } from './utils';
import {
  Login,
  Chats,
  Register,
  Profile,
  ProfileChangeData,
  ProfileChangePasswd,
} from './views';


document.addEventListener('DOMContentLoaded', async () => {
  router
    .use(new Login(), Auth.SignIn)
    .use(new Chats())
    .use(new Register(), Auth.SignUp)
    .use(Profile, Auth.User)
    .use(new ProfileChangeData(), Users.Profile)
    .use(new ProfileChangePasswd(), Users.Password)
    .start();

  // let isProtectedRoute = true;

  // switch (window.location.pathname) {
  //   case Auth.SignIn:
  //   case Auth.SignUp:
  //     isProtectedRoute = false;
  //     break;
  // }

  // try {
  //   await AuthController.fetchUser();

  //   router.start();

  //   if (!isProtectedRoute) {
  //     router.go(Users.Profile);
  //   }
  // } catch (e) {
  //   console.log(e, 'Here');
  //   router.start();

  //   if (isProtectedRoute) {
  //     router.go(Auth.SignIn);
  //   }
  // }
});
