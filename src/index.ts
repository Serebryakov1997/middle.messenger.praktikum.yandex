import { Block, renderDOM } from './utils';
import { Login, Error, Chats } from './views';

const page500 = new Error(/*{
  // code: '500',
  // codeErrorText: 'Мы уже фиксим',
}*/);

document.addEventListener('DOMContentLoaded', () => {
  function getPage(): Block {
    switch (window.location.pathname) {
      case '/':
        return new Login() || page500;
      case '/chats':
        return new Chats() || page500;
      default:
        return new Error();
    }
  }

  renderDOM('#app', getPage());
});
