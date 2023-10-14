import { Block, renderDOM } from './utils';
import { Login, Error } from './views/pages';

const page500 = new Error(/*{
  // code: '500',
  // codeErrorText: 'Мы уже фиксим',
}*/);

document.addEventListener('DOMContentLoaded', () => {
  function getPage(): Block {
    switch (window.location.pathname) {
      case '/':
        return new Login() || page500;
      default:
        return new Error();
    }
  }

  renderDOM('#app', getPage());
});
