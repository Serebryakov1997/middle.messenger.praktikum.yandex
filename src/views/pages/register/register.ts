import './register.css';
import {
  clickValidation, inputValidation, validationError,
} from '../../../utils';
import { registerTmpl } from './register.tmpl';
import {
  Button, Input, Label, UnderButtonLink, ValidError,
} from '../../components';
import {
  emailValidator,
  firstNameValidator,
  loginValidator,
  passwdValidator,
  phoneValidator,
  secondNameValidator,
} from '../../../models/validators';
import { AuthController } from '../../../controllers/auth-controller';
import { Block, router } from '../../../core';


export class Register extends Block {
  _formData: FormData;

  constructor() {
    super('form', {
      styles: {
        registerContainerClass: 'register-container',
        registerHeaderClass: 'register-header',
        registerPayloadClass: 'register-payload'
      },
      registerHeaderName: 'Регистрация',
    });
    this._formData = new FormData();
  }

  protected init(): void {
    this.children = {
      // email
      labelEmail: new Label({
        name: 'email',
        labelName: 'Почта',
      }),
      inputEmail: new Input({
        name: 'email',
        placeholder: 'ivanivanov@yandex.ru',
        validErrorId: 'error',
        inputType: 'text',
        events: {
          blur: (e: Event) => {
            this._formData.set('email', (<HTMLInputElement>e.target).value);
            inputValidation(e, emailValidator,
              {
                validError: this.children.validErrorEmail as Block,
                input: this.children.inputEmail as Block,
                button: this.children.registerButton as Block,
              });
          },
        },
      }),
      validErrorEmail: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // login
      labelLogin: new Label({
        name: 'login',
        labelName: 'Логин',
      }),
      inputLogin: new Input({
        name: 'login',
        placeholder: 'ivanivanov',
        validErrorId: 'error',
        inputType: 'text',
        events: {
          blur: (e: Event) => {
            this._formData.set('login', (<HTMLInputElement>e.target).value);
            inputValidation(e, loginValidator,
              {
                validError: this.children.validErrorLogin as Block,
                input: this.children.inputLogin as Block,
                button: this.children.registerButton as Block,
              });
          },
        },
      }),

      validErrorLogin: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // name
      labelName: new Label({
        name: 'name',
        labelName: 'Имя',
      }),

      inputName: new Input({
        name: 'first_name',
        placeholder: 'Иван',
        validErrorId: 'error',
        inputType: 'text',
        events: {
          blur: (e: Event) => {
            this._formData.set('first_name', (<HTMLInputElement>e.target).value);
            inputValidation(e, firstNameValidator,
              {
                validError: <Block>this.children.validErrorName,
                input: <Block>this.children.inputName,
                button: <Block>this.children.registerButton,
              });
          },
        },
      }),

      validErrorName: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // surname
      labelSurName: new Label({
        name: 'second_name',
        labelName: 'Фамилия',
      }),

      inputSurName: new Input({
        name: 'second_name',
        placeholder: 'Иванов',
        validErrorId: 'error',
        inputType: 'text',
        events: {
          blur: (e: Event) => {
            this._formData.set('second_name', (<HTMLInputElement>e.target).value);
            inputValidation(e, secondNameValidator,
              {
                validError: <Block>this.children.validErrorSurName,
                input: <Block>this.children.inputSurName,
                button: <Block>this.children.registerButton,
              });
          },
        },
      }),

      validErrorSurName: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // phone
      labelPhone: new Label({
        name: 'phone',
        labelName: 'Телефон',
      }),

      inputPhone: new Input({
        name: 'phone',
        placeholder: '+79099673030',
        validErrorId: 'error',
        inputType: 'text',
        events: {
          blur: (e: Event) => {
            this._formData.set('phone', (<HTMLInputElement>e.target).value);
            inputValidation(e, phoneValidator,
              {
                validError: <Block>this.children.validErrorPhone,
                input: <Block>this.children.inputPhone,
                button: <Block>this.children.registerButton,
              });
          },
        },
      }),
      validErrorPhone: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // passwd
      labelPasswd: new Label({
        name: 'password',
        labelName: 'Пароль',
      }),
      inputPasswd: new Input({
        name: 'password',
        validErrorId: 'error',
        inputType: 'password',
        events: {
          blur: (e: Event) => {
            this._formData.set('password', (<HTMLInputElement>e.target).value);
            inputValidation(e, passwdValidator,
              {
                validError: <Block>this.children.validErrorPasswd,
                input: <Block>this.children.inputPasswd,
                button: <Block>this.children.registerButton,
              });

            const repeatPasswd = this._formData.get('repeat_password');
            if (repeatPasswd) {
              const password = this._formData.get('password');
              if (password !== repeatPasswd) {
                validationError({
                  validError: <Block>this.children.validErrorRepeatPasswd,
                  input: <Block>this.children.inputPasswd,
                  button: <Block>this.children.registerButton,
                }, '');
                validationError({
                  validError: <Block>this.children.validErrorRepeatPasswd,
                  input: <Block>this.children.inputRepeatPasswd,
                  button: <Block>this.children.registerButton,
                }, 'Пароли не совпадают');
              } else {
                inputValidation(e, passwdValidator,
                  {
                    validError: <Block>this.children.validErrorRepeatPasswd,
                    input: <Block>this.children.inputPasswd,
                    button: <Block>this.children.registerButton,
                  });
                inputValidation(e, passwdValidator,
                  {
                    validError: <Block>this.children.validErrorRepeatPasswd,
                    input: <Block>this.children.inputRepeatPasswd,
                    button: <Block>this.children.registerButton,
                  });
              }
            }
          },
        },
      }),
      validErrorPasswd: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // repeat_password
      labelRepeatPasswd: new Label({
        name: 'repeat_password',
        labelName: 'Пароль (ещё раз)',
      }),
      inputRepeatPasswd: new Input({
        name: 'repeat_password',
        validErrorId: 'error',
        inputType: 'password',
        events: {
          blur: (e: Event) => {
            this._formData.set('repeat_password', (<HTMLInputElement>e.target).value);

            const passwd = this._formData.get('password');
            const repeat_password = this._formData.get('repeat_password');
            if (passwd !== repeat_password) {
              validationError({
                validError: <Block>this.children.validErrorRepeatPasswd,
                input: <Block>this.children.inputPasswd,
                button: <Block>this.children.registerButton,
              }, '');
              validationError({
                validError: <Block>this.children.validErrorRepeatPasswd,
                input: <Block>this.children.inputRepeatPasswd,
                button: <Block>this.children.registerButton,
              }, 'Пароли не совпадают');
            } else {
              inputValidation(e, passwdValidator,
                {
                  validError: <Block>this.children.validErrorRepeatPasswd,
                  input: <Block>this.children.inputPasswd,
                  button: <Block>this.children.registerButton,
                });
              inputValidation(e, passwdValidator,
                {
                  validError: <Block>this.children.validErrorRepeatPasswd,
                  input: <Block>this.children.inputRepeatPasswd,
                  button: <Block>this.children.registerButton,
                });
            }
          },
        },
      }),
      validErrorRepeatPasswd: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      registerButton: new Button({
        buttonName: 'Зарегистрироваться',
        styles: {
          buttonClass: 'register-button',
        },
        events: {
          click: (e: Event) => {
            // code below put to AuthController, to signUp function
            const isValid = clickValidation(
              this._formData,
              {
                email: emailValidator,
                login: loginValidator,
                first_name: firstNameValidator,
                second_name: secondNameValidator,
                phone: phoneValidator,
                password: passwdValidator,
                repeat_password: passwdValidator,
              },
              {
                email: {
                  validError: <Block>this.children.validErrorEmail,
                  input: <Block>this.children.inputEmail,
                  button: <Block>this.children.registerButton,
                },
                login: {
                  validError: <Block>this.children.validErrorLogin,
                  input: <Block>this.children.inputLogin,
                  button: <Block>this.children.registerButton,
                },
                first_name: {
                  validError: <Block>this.children.validErrorName,
                  input: <Block>this.children.inputName,
                  button: <Block>this.children.registerButton,
                },
                second_name: {
                  validError: <Block>this.children.validErrorSurName,
                  input: <Block>this.children.inputSurName,
                  button: <Block>this.children.registerButton,
                },
                phone: {
                  validError: <Block>this.children.validErrorPhone,
                  input: <Block>this.children.inputPhone,
                  button: <Block>this.children.registerButton,
                },
                password: {
                  validError: <Block>this.children.validErrorPasswd,
                  input: <Block>this.children.inputPasswd,
                  button: <Block>this.children.registerButton,
                },
                repeat_password: {
                  validError: <Block>this.children.validErrorRepeatPasswd,
                  input: <Block>this.children.inputRepeatPasswd,
                  button: <Block>this.children.registerButton,
                },
              },
              e,
            );
            this._formData.forEach((value, key) => {
              console.log(`${key}: ${value}`);
            });

            if (isValid) {
              AuthController.signUp({
                first_name: this._formData.get('first_name') as string,
                second_name: this._formData.get('second_name') as string,
                email: this._formData.get('email') as string,
                login: this._formData.get('login') as string,
                phone: this._formData.get('phone') as string,
                password: this._formData.get('password') as string,
                repeat_password: this._formData.get('repeat_password') as string
              });
              e.preventDefault();
            }
          },
        },
      }),

      underButtonLink: new UnderButtonLink('register-under-text', {
        styles: {
          underButtonClass: 'register-under-text',
        },
        underButtonText: 'Войти',
        events: {
          click: () => {
            // AuthController.signUp({
            //   first_name: this._formData.get('first_name') as string,
            //   second_name: this._formData.get('second_name') as string,
            //   email: this._formData.get('email') as string,
            //   login: this._formData.get('login') as string,
            //   phone: this._formData.get('phone') as string,
            //   password: this._formData.get('password') as string,
            //   repeat_password: this._formData.get('repeat_password') as string
            // });
            router.go('/');
          }
        }
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(registerTmpl, this.props);
  }
}
