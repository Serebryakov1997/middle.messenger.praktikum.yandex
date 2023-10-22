import { Block, renderDOM } from './utils';
import {
  Login,
  PageError,
  Chats,
  Register,
  Profile,
  ProfileChangeData,
  ProfileChangePasswd,
} from './views';

const page500 = new PageError('500', 'Мы уже фиксим');

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
      case '/profile_change_passwd':
        return new ProfileChangePasswd() || page500;
      default:
        return new PageError('404', 'Не туда попали') || page500;
    }
  }

  renderDOM('#app', getPage());
});
