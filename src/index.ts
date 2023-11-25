import { AuthController } from './controllers/auth-controller';
import { Block, router } from './core';
import { AddressPaths } from './utils';
import {
  Login,
  Chats,
  Register,
  Profile,
  ProfileChangeData,
  ProfileChangePasswd,
  // TestStorePage,
} from './views';


document.addEventListener('DOMContentLoaded', async () => {
  router
    .use(new Login(), AddressPaths.SignIn)
    .use(new Chats(), AddressPaths.Chats)
    .use(new Register(), AddressPaths.SignUp)
    .use(Profile, AddressPaths.Profile)
    .use(new ProfileChangeData(), AddressPaths.ProfileChangeData)
    .use(new ProfileChangePasswd(), AddressPaths.ProfileChangePasswd)
  // .use(TestStorePage, '/test')
  // .start();

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case AddressPaths.SignIn:
    case AddressPaths.SignUp:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    router.start();

    if (!isProtectedRoute) {
      router.go(AddressPaths.Profile);
    }
  } catch (e) {
    console.log(e, 'Here');
    router.start();

    if (isProtectedRoute) {
      router.go(AddressPaths.SignIn);
    }
  }
});
