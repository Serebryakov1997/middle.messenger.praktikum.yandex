import './profile.css';
import { profileTmpl } from './profile.tmpl';
import { InputBase, Label, UnderButtonLink } from '../../components';
import { AuthController } from '../../../controllers/auth-controller';
import { Block, router } from '../../../core';
import { AddressPaths } from '../../../utils';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { Avatar } from '../../components/avatarImg';

export class ProfileBase extends Block {
  constructor() {
    super({
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
      statusName: 'online',
      changeDataName: 'Изменить данные',
      changePasswdName: 'Изменить пароль',
      logoutName: 'Выйти',
    });
  }

  protected init(): void {
    this.children.avatar = new Avatar({});
    // email
    const mapStateToPropsEmail = (state: IState) => ({
      inputValue: state.user?.email,
    });
    const InputEmail = withStore(mapStateToPropsEmail)(InputBase);
    this.children.labelEmail = new Label({
      name: 'email',
      labelName: 'Почта',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputEmail = new InputEmail({
      name: 'email',
      styles: {
        inputClass: 'profile-input',
      },
      inputType: 'text',
      readonly: 'readonly',
    });

    // login
    const mapStateToPropsLogin = (state: IState) => ({
      inputValue: state.user?.login,
    });
    const InputLogin = withStore(mapStateToPropsLogin)(InputBase);
    this.children.labelLogin = new Label({
      name: 'profile-login',
      labelName: 'Логин',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputLogin = new InputLogin({
      name: 'profile-login',
      styles: {
        inputClass: 'profile-input',
      },
      inputType: 'text',
      readonly: 'readonly',
    });

    // first_name
    const mapStateToPropsFirstName = (state: IState) => ({
      inputValue: state.user?.first_name,
    });
    const InputFirstName = withStore(mapStateToPropsFirstName)(InputBase);
    this.children.labelFirstName = new Label({
      name: 'first_name',
      labelName: 'Имя',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputFirstName = new InputFirstName({
      name: 'first_name',
      styles: {
        inputClass: 'profile-input',
      },
      inputType: 'text',
      readonly: 'readonly',
    });

    // second_name
    const mapStateToPropsSecondName = (state: IState) => ({
      inputValue: state.user?.second_name,
    });
    const InputSecondName = withStore(mapStateToPropsSecondName)(InputBase);
    this.children.labelSecondName = new Label({
      name: 'second_name',
      labelName: 'Фамилия',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputSecondName = new InputSecondName({
      name: 'second_name',
      styles: {
        inputClass: 'profile-input',
      },
      inputType: 'text',
      readonly: 'readonly',
    });

    // display_name
    const mapStateToPropsDisplayName = (state: IState) => ({
      inputValue: state.user?.display_name,
    });
    const InputDisplayName = withStore(mapStateToPropsDisplayName)(InputBase);
    this.children.labelChatName = new Label({
      name: 'display_name',
      labelName: 'Имя в чате',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputChatName = new InputDisplayName({
      name: 'display_name',
      styles: {
        inputClass: 'profile-input',
      },
      inputType: 'text',
      readonly: 'readonly',
    });

    // phone
    const mapStateToPropsPhone = (state: IState) => ({
      inputValue: state.user?.phone,
    });
    const InputPhone = withStore(mapStateToPropsPhone)(InputBase);
    this.children.labelPhone = new Label({
      name: 'phone',
      labelName: 'Телефон',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputPhone = new InputPhone({
      name: 'phone',
      styles: {
        inputClass: 'profile-input',
      },
      inputType: 'text',
      readonly: 'readonly',
    });

    this.children.backToChats = new UnderButtonLink({
      styles: {
        underButtonClass: 'change-data back-to-chats',
      },
      underButtonText: 'Назад к чатам',
      events: {
        click: () => {
          router.go(AddressPaths.Chats);
        },
      },
    });
    // changeDataLink
    this.children.changeDataLink = new UnderButtonLink({
      styles: {
        underButtonClass: 'change-data',
      },
      underButtonText: 'Изменить данные',
      events: {
        click: () => {
          router.go(AddressPaths.ProfileChangeData);
        },
      },
    });
    // changePasswdLink
    this.children.changePasswdLink = new UnderButtonLink({
      styles: {
        underButtonClass: 'change-data change-passwd',
      },
      underButtonText: 'Изменить пароль',
      events: {
        click: () => {
          router.go(AddressPaths.ProfileChangePasswd);
        },
      },
    });
    // logoutLink
    this.children.logoutLink = new UnderButtonLink({
      styles: {
        underButtonClass: 'change-data logout',
      },
      underButtonText: 'Выйти',
      events: {
        click: (e: Event) => {
          AuthController.logout();
          e.preventDefault();
        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(profileTmpl, this.props);
  }
}

const mapStateToPropsProfile = (state: IState) => ({
  imgRef: state.user?.avatar,
  displayName: state.user?.display_name,
});

export const Profile = withStore(mapStateToPropsProfile)(ProfileBase);
