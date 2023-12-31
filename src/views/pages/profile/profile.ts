import './profile.css';
import { Block, DEV_LINK_ADDRESS } from '../../../utils';
import { profileTmpl } from './profile.tmpl';
import { Input, Label } from '../../components';

const mockData = {
  email: 'ivanivanov@yandex.ru',
  login: 'ivanivanov',
  first_name: 'Иван',
  second_name: 'Иванов',
  chat_name: 'Иван',
  phone: '+79099673030',
};

export class Profile extends Block {
  _formData: FormData;

  constructor() {
    super('form', {
      styles: {
        containerClass: 'profile-container',
        displayNameClass: 'display-name',
        statusClass: 'status',
        changeDataClass: 'change-data',
        changePasswordClass: 'change-passwd',
        logoutClass: 'logout',
      },
      name: 'avatar',
      dislpayFieldName: 'display_name',
      displayName: 'Иван',
      statusName: 'online',
      changeDataLink: `${DEV_LINK_ADDRESS}profile_change_data`,
      changeDataName: 'Изменить данные',
      changePasswordLink: `${DEV_LINK_ADDRESS}profile_change_passwd`,
      changePasswdName: 'Изменить пароль',
      toLoginLink: DEV_LINK_ADDRESS,
      logoutName: 'Выйти',
    });
    this._formData = new FormData();
    Object.entries(mockData).forEach(([key, value]) => {
      this._formData.set(key, value);
    });
  }

  protected init(): void {
    this.children = {
      labelEmail: new Label({
        name: 'email',
        labelName: 'Почта',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputEmail: new Input({
        name: 'email',
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'text',
        inputValue: mockData.email,
        readonly: 'readonly',
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
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'text',
        inputValue: mockData.login,
        readonly: 'readonly',
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
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'text',
        inputValue: mockData.first_name,
        readonly: 'readonly',
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
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'text',
        inputValue: mockData.second_name,
        readonly: 'readonly',
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
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'text',
        inputValue: mockData.chat_name,
        readonly: 'readonly',
      }),

      // phone
      labelPhone: new Label({
        name: 'phone',
        labelName: 'Телефон',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputPhone: new Input({
        name: 'phone',
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'text',
        inputValue: mockData.phone,
        readonly: 'readonly',
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(profileTmpl, this.props);
  }
}
