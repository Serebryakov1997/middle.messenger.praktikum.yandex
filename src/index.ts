import { Block, renderDOM } from './utils';
import {
  Login,
  Error,
  Chats,
  Register,
  Profile,
  ProfileChangeData,
} from './views';

const page500 = new Error();

document.addEventListener('DOMContentLoaded', () => {
  function getPage(): Block {
    switch (window.location.pathname) {
      case '/':
        return new Login() || page500;
      case '/chats':
        return new Chats() || page500;
      case '/register':
        return new Register() || page500;
      case '/profile':
        return new Profile() || page500;
      case '/profile_change_data':
        return new ProfileChangeData() || page500;
      default:
        return new Error();
    }
  }

  renderDOM('#app', getPage());
});
