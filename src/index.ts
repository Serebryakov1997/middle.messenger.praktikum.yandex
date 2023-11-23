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
} from './views';

console.log('typeof Block: ', typeof Block);

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Login, AddressPaths.SignIn)
    .use(Chats, AddressPaths.Chats)
    .use(Register, AddressPaths.SignUp)
    .use(Profile, AddressPaths.Profile)
    .use(ProfileChangeData, AddressPaths.ProfileChangeData)
    .use(ProfileChangePasswd, AddressPaths.ProfileChangePasswd)
  // .start();

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case AddressPaths.SignIn:
    case AddressPaths.SignUp:
      isProtectedRoute = false;
      break;
  }

  try {
    // await AuthController.fetchUser();

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
