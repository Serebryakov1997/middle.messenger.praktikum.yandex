import './profile.css';
import { profileTmpl } from './profile.tmpl';
import { Input, Label, UnderButtonLink } from '../../components';
import { AuthController } from '../../../controllers/auth-controller';
import { Block, router } from '../../../core';
import { IState, IUser } from '../../../models/interfaces/auth';
import { store, withStore } from '../../../core/Store';

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
    console.log(store.state);
    // for (const item in store.state) {
    //   console.log('item: ', item);
    // }
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

      // changeDataLink
      changeDataLink: new UnderButtonLink('a', {
        styles: {
          underButtonClass: 'change-data'
        },
        underButtonText: 'Изменить данные',
        events: {
          click: () => {
            router.go('/settings_change_data')
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
            router.go('/settings_change_passwd');
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


const mapStateToProps = (state: IState) => ({
  email: state.user?.email,
  login: state.user?.login,
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  chat_name: state.user?.chat_name,
  phone: state.user?.phone
})

export const Profile = withStore(mapStateToProps, new BaseProfile());


