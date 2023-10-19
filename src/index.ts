import { Block, renderDOM } from './utils';
import {
  Login, Error, Chats, Register,
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
      default:
        return new Error();
    }
  }

  renderDOM('#app', getPage());
});
