import './profile.css';
import { profileTmpl } from './profile.tmpl';
import { Input, Label, UnderButtonLink } from '../../components';
import { AuthController } from '../../../controllers/auth-controller';
import { Block, router } from '../../../core';
// import { IState } from '../../../models/interfaces/auth';
import { store, withStore } from '../../../core/Store';
import { AddressPaths } from '../../../utils';
import { IState } from '../../../models/interfaces/auth';

const mockData = {
  email: 'ivanivanov@yandex.ru',
  login: 'ivanivanov',
  first_name: 'Иван',
  second_name: 'Иванов',
  chat_name: 'Иван',
  phone: '+79099673030',
};

export class BaseProfile extends Block {
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
      changeDataName: 'Изменить данные',
      changePasswdName: 'Изменить пароль',
      logoutName: 'Выйти',
    });
    this._formData = new FormData();
    Object.entries(mockData).forEach(([key, value]) => {
      this._formData.set(key, value);
    });
    const curState = store.getState();
    // console.log('store get state in profile: ', curState);
    // const { user } = store.getState();
    // console.log('store get state in profile: ', user);
    // for (const item in store.state) {
    //   console.log('item: ', item);
    // }
  }

  protected init(): void {
    console.log('props in baseProfile: ', this.props);
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

      // changeDataLink
      changeDataLink: new UnderButtonLink('a', {
        styles: {
          underButtonClass: 'change-data'
        },
        underButtonText: 'Изменить данные',
        events: {
          click: () => {
            router.go(AddressPaths.ProfileChangeData)
          }
        }
      }),
      // changePasswdLink
      changePasswdLink: new UnderButtonLink('a', {
        styles: {
          underButtonClass: 'change-data change-passwd'
        },
        underButtonText: 'Изменить пароль',
        events: {
          click: () => {
            router.go(AddressPaths.ProfileChangeData);
          }
        }
      }),
      // logoutLink
      logoutLink: new UnderButtonLink('a', {
        styles: {
          underButtonClass: 'change-data logout'
        },
        underButtonText: 'Выйти',
        events: {
          click: (e: Event) => {
            AuthController.logout();
            e.preventDefault();
          }
        }
      })
    };

  }


  protected componentDidMount(oldProps: Record<string, unknown>): void {
    AuthController.fetchUser();
  }

  render(): DocumentFragment {
    return this.compile(profileTmpl, this.props);
  }
}


export const Profile = withStore(new BaseProfile());
