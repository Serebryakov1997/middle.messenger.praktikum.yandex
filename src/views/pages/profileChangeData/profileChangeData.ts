import {
  emailValidator,
  firstNameValidator,
  loginValidator,
  phoneValidator,
  secondNameValidator,
} from '../../../models/validators';

import {
  Block,
  Router,
  clickValidation,
  inputValidation,
} from '../../../utils';

import {
  Button, Input, Label, ValidError,
} from '../../components';
import { profileChangeDataTmpl } from './profileChangeData.tmpl';

const mockData = {
  email: 'ivanivanov@yandex.ru',
  login: 'ivanivanov',
  first_name: 'Иван',
  second_name: 'Иванов',
  chat_name: 'Иван',
  phone: '+79099673030',
};

export class ProfileChangeData extends Block {
  _formData: FormData;

  constructor() {
    super('form', {
      styles: {
        containerClass: 'profile-container',
        avatarNameClass: 'avatar',
      },
      avatarName: 'avatar',
    });
    this._formData = new FormData();
    Object.entries(mockData).forEach(([key, value]) => {
      this._formData.set(key, value);
    });
  }

  protected init(): void {
    this.children = {
      // email
      labelEmail: new Label({
        name: 'email',
        labelName: 'Почта',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputEmail: new Input({
        name: 'email',
        validErrorId: 'error',
        inputType: 'text',
        inputValue: mockData.email,
        styles: {
          inputClass: 'profile-input',
        },
        events: {
          blur: (e: Event) => {
            this._formData.set('email', (<HTMLInputElement>e.target).value);
            inputValidation(e, emailValidator, {
              validError: <Block>this.children.validErrorEmail,
              input: <Block>this.children.inputEmail,
              button: <Block>this.children.buttonSave,
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
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputLogin: new Input({
        name: 'login',
        validErrorId: 'error',
        inputType: 'text',
        inputValue: mockData.login,
        styles: {
          inputClass: 'profile-input',
        },
        events: {
          blur: (e: Event) => {
            this._formData.set('login', (<HTMLInputElement>e.target).value);
            inputValidation(e, loginValidator, {
              validError: <Block>this.children.validErrorLogin,
              input: <Block>this.children.inputLogin,
              button: <Block>this.children.buttonSave,
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

      // first_name
      labelFirstName: new Label({
        name: 'first_name',
        labelName: 'Имя',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputFirstName: new Input({
        name: 'first_name',
        validErrorId: 'error',
        inputType: 'text',
        inputValue: mockData.first_name,
        styles: {
          inputClass: 'profile-input',
        },
        events: {
          blur: (e: Event) => {
            this._formData.set('first_name', (<HTMLInputElement>e.target).value);
            inputValidation(e, firstNameValidator, {
              validError: <Block>this.children.validErrorFirstName,
              input: <Block>this.children.inputFirstName,
              button: <Block>this.children.buttonSave,
            });
          },
        },
      }),
      validErrorFirstName: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // second_name
      labelSecondName: new Label({
        name: 'second_name',
        labelName: 'Фамилия',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputSecondName: new Input({
        name: 'second_name',
        validErrorId: 'error',
        inputType: 'text',
        inputValue: mockData.second_name,
        styles: {
          inputClass: 'profile-input',
        },
        events: {
          blur: (e: Event) => {
            this._formData.set('second_name', (<HTMLInputElement>e.target).value);
            inputValidation(e, secondNameValidator, {
              validError: <Block>this.children.validErrorSecondName,
              input: <Block>this.children.inputSecondName,
              button: <Block>this.children.buttonSave,
            });
          },
        },
      }),
      validErrorSecondName: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // chat_name
      labelChatName: new Label({
        name: 'chat_name',
        labelName: 'Имя в чате',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputChatName: new Input({
        name: 'chat_name',
        validErrorId: 'error',
        inputType: 'text',
        inputValue: mockData.chat_name,
        styles: {
          inputClass: 'profile-input',
        },
        events: {
          blur: (e: Event) => {
            this._formData.set('chat_name', (<HTMLInputElement>e.target).value);
            inputValidation(e, firstNameValidator, {
              validError: <Block>this.children.validErrorChatName,
              input: <Block>this.children.inputChatName,
              button: <Block>this.children.buttonSave,
            });
          },
        },
      }),
      validErrorChatName: new ValidError('div', {
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // Phone
      labelPhone: new Label({
        name: 'phone',
        labelName: 'Телефон',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputPhone: new Input({
        name: 'phone',
        validErrorId: 'error',
        inputType: 'text',
        inputValue: mockData.phone,
        styles: {
          inputClass: 'profile-input',
        },
        events: {
          blur: (e: Event) => {
            this._formData.set('phone', (<HTMLInputElement>e.target).value);
            inputValidation(e, phoneValidator, {
              validError: <Block>this.children.validErrorPhone,
              input: <Block>this.children.inputPhone,
              button: <Block>this.children.buttonSave,
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

      buttonSave: new Button({
        buttonName: 'Сохранить',
        styles: {
          buttonClass: 'button-save',
        },
        events: {
          click: (e: Event) => {
            const isValid = clickValidation(
              this._formData,
              {
                email: emailValidator,
                login: loginValidator,
                first_name: firstNameValidator,
                second_name: secondNameValidator,
                chat_name: firstNameValidator,
                phone: phoneValidator,
              },
              {
                email: {
                  validError: <Block>this.children.validErrorEmail,
                  input: <Block>this.children.inputEmail,
                  button: <Block>this.children.buttonSave,
                },
                login: {
                  validError: <Block>this.children.validErrorLogin,
                  input: <Block>this.children.inputLogin,
                  button: <Block>this.children.buttonSave,
                },
                first_name: {
                  validError: <Block>this.children.validErrorFirstName,
                  input: <Block>this.children.inputFirstName,
                  button: <Block>this.children.buttonSave,
                },
                second_name: {
                  validError: <Block>this.children.validErrorSecondName,
                  input: <Block>this.children.inputSecondName,
                  button: <Block>this.children.buttonSave,
                },
                chat_name: {
                  validError: <Block>this.children.validErrorPhone,
                  input: <Block>this.children.inputChatName,
                  button: <Block>this.children.buttonSave,
                },
                phone: {
                  validError: <Block>this.children.validErrorPhone,
                  input: <Block>this.children.inputPhone,
                  button: <Block>this.children.buttonSave,
                },
              },
              e,
            );
            this._formData.forEach((value, key) => {
              console.log(`${key}: ${value}`);
            });
            if (isValid) {
              const router = new Router();
              router.go('/settings');
            }
          },
        },
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(profileChangeDataTmpl, this.props);
  }
}
