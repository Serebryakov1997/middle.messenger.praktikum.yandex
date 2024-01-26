import { AuthController } from './controllers/auth-controller';
import { ChatController } from './controllers/chat-controller';
import { router } from './core';
import { AddressPaths } from './utils';
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
    .use(new Login(), AddressPaths.SignIn)
    .use(new Chats({}), AddressPaths.Chats)
    .use(new Register(), AddressPaths.SignUp)
    .use(new Profile({}), AddressPaths.Profile)
    .use(new ProfileChangeData({}), AddressPaths.ProfileChangeData)
    .use(new ProfileChangePasswd(), AddressPaths.ProfileChangePasswd);

  let isProtectedRoute = true;

  /* eslint default-case: "off" */
  switch (window.location.pathname) {
    case AddressPaths.SignIn:
    case AddressPaths.SignUp:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();
    await ChatController.getChats();

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
