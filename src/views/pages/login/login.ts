import './login.css';
import {
  clickValidation,
  inputValidation,
} from '../../../utils';
import {
  ButtonBase, InputBase, Label, UnderButtonLink, ValidError,
} from '../../components';
import { loginTmpl } from './login.tmpl';
import { loginValidator, passwdValidator } from '../../../models/validators';
import { AuthController } from '../../../controllers/auth-controller';
import { Block, router } from '../../../core';

export class Login extends Block {
  _formData: FormData;

  constructor() {
    super({
      styles: {
        containerClass: 'login-container',
        headerClass: 'login-header',
        underButtonClass: 'login-button__under-text',
      },
      headerName: 'Вход',
      underButtonText: 'Нет аккаунта?',
    });
    this._formData = new FormData();
  }

  protected init(): void {
    this.children = {
      labelLogin: new Label({
        name: 'login',
        labelName: 'Логин',
      }),
      inputLogin: new InputBase({
        name: 'login',
        placeholder: 'ivanivanov',
        validErrorId: 'error',
        inputType: 'text',
        events: {
          blur: (e: Event) => {
            this._formData.set('login', (<HTMLInputElement>e.target).value);
            inputValidation(e, loginValidator, {
              validError: this.children.validErrorLogin as Block,
              input: this.children.inputLogin as Block,
              button: this.children.loginButton as Block,
            });
          },
        },
      }),
      validErrorLogin: new ValidError({
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),
      labelPasswd: new Label({
        name: 'password',
        labelName: 'Пароль',
      }),
      inputPasswd: new InputBase({
        name: 'password',
        validErrorId: 'error',
        inputType: 'password',
        events: {
          blur: (e: Event) => {
            this._formData.set('password', (<HTMLInputElement>e.target).value);
            inputValidation(e, passwdValidator, {
              validError: this.children.validErrorPasswd as Block,
              input: this.children.inputPasswd as Block,
              button: this.children.loginButton as Block,
            });
          },
        },
      }),
      validErrorPasswd: new ValidError({
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),
      loginButton: new ButtonBase({
        buttonName: 'Войти',
        styles: {
          buttonClass: 'login-button',
          buttonNameClass: 'auth-button-name'
        },
        events: {
          click: (e: Event) => {
            const login = this._formData.get('login') as string;
            const password = this._formData.get('password') as string;
            const isValid = clickValidation(
              {
                login,
                password
              },
              {
                login: loginValidator,
                password: passwdValidator,
              },
              {
                login: {
                  validError: <Block>this.children.validErrorLogin,
                  input: <Block>this.children.inputLogin,
                  button: <Block>this.children.loginButton,
                },
                password: {
                  validError: <Block>this.children.validErrorPasswd,
                  input: <Block>this.children.inputPasswd,
                  button: <Block>this.children.loginButton,
                },
              },
              e,
            );
            this._formData.forEach((value, key) => {
              console.log(`${key}: ${value}`);
            });

            if (isValid) {
              AuthController.signIn({ login, password });
              e.preventDefault();
            }
          },
        },
      }),
      underButtonLink: new UnderButtonLink({
        styles: {
          underButtonClass: 'under-text',
        },
        underButtonText: 'Нет аккаунта?',
        events: {
          click: () => {
            router.go('/sign-up');
          }
        }
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(loginTmpl, this.props);
  }
}
