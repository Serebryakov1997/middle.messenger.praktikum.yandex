import './profileChangeData.css';
import { UserController } from '../../../controllers/user-controller';
import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import {
  emailValidator,
  firstNameValidator,
  loginValidator,
  phoneValidator,
  secondNameValidator,
} from '../../../models/validators';

import {
  clickValidation,
  inputValidation,
} from '../../../utils';

import {
  AvatarLoader,
  ButtonBase, ClickableText, InputBase, Label, ValidError,
} from '../../components';
import { profileChangeDataTmpl } from './profileChangeData.tmpl';


export class ProfileChangeDataBase extends Block {

  _formData: FormData;

  constructor() {
    super({
      styles: {
        containerClass: 'profile-container',
        avatarNameClass: 'avatar',
        loadFileTextClass: 'load-file-text'
      },
      avatarName: 'avatar',
      loadFileText: 'Загрузить файл'
    });
    this._formData = new FormData();
  }

  protected init(): void {

    this.children.clickableText = new ClickableText({
      loadFileText: 'Загрузить файл',
      events: {
        click: () => {
          (<Block>this.children.avatarLoader).show();
        }
      }
    });

    this.children.avatarLoader = new AvatarLoader({
      submit: (e: Event) => {
        e.preventDefault();
        const fileList = (e.target as HTMLInputElement).files;
        console.log('avatar: ', fileList?.item(0));
        // UserController.changeUserAvatar(fileList?.item(0)!);
        // console.log(e);
      }
    })
    // email
    const mapStateToPropsEmail = (state: IState) => ({
      inputValue: state.user?.email
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
      validErrorId: 'error',
      inputType: 'text',
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
    });


    this.children.validErrorEmail = new ValidError({
      styles: {
        validErrClass: 'valid-err',
      },
      validErrorId: 'error',
    });


    // login
    const mapStateToPropsLogin = (state: IState) => ({
      inputValue: state.user?.login
    });
    const InputLogin = withStore(mapStateToPropsLogin)(InputBase);
    this.children.labelLogin = new Label({
      name: 'login',
      labelName: 'Логин',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputLogin = new InputLogin({
      name: 'login',
      validErrorId: 'error',
      inputType: 'text',
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
    });
    this.children.validErrorLogin = new ValidError({
      styles: {
        validErrClass: 'valid-err',
      },
      validErrorId: 'error',
    });


    // first_name
    const mapStateToPropsFirstName = (state: IState) => ({
      inputValue: state.user?.first_name
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
      validErrorId: 'error',
      inputType: 'text',
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
    });
    this.children.validErrorFirstName = new ValidError({
      styles: {
        validErrClass: 'valid-err',
      },
      validErrorId: 'error',
    });


    // second_name
    const mapStateToPropsSecondName = (state: IState) => ({
      inputValue: state.user?.second_name
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
      validErrorId: 'error',
      inputType: 'text',
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
    });
    this.children.validErrorSecondName = new ValidError({
      styles: {
        validErrClass: 'valid-err',
      },
      validErrorId: 'error',
    });


    // chat_name
    const mapStateToPropsChatName = (state: IState) => ({
      inputValue: state.user?.first_name
    });
    const InputChatName = withStore(mapStateToPropsChatName)(InputBase);
    this.children.labelChatName = new Label({
      name: 'chat_name',
      labelName: 'Имя в чате',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputChatName = new InputChatName({
      name: 'chat_name',
      validErrorId: 'error',
      inputType: 'text',
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
    });

    this.children.validErrorChatName = new ValidError({
      styles: {
        validErrClass: 'valid-err',
      },
      validErrorId: 'error',
    });


    // Phone
    const mapStateToPropsToPhone = (state: IState) => ({
      inputValue: state.user?.phone
    });
    const InputPhone = withStore(mapStateToPropsToPhone)(InputBase);
    this.children.labelPhone = new Label({
      name: 'phone',
      labelName: 'Телефон',
      styles: {
        labelClass: 'profile-label',
      },
    });
    this.children.inputPhone = new InputPhone({
      name: 'phone',
      validErrorId: 'error',
      inputType: 'text',
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
    })
    this.children.validErrorPhone = new ValidError({
      styles: {
        validErrClass: 'valid-err',
      },
      validErrorId: 'error',
    });


    this.children.buttonSave = new ButtonBase({
      buttonName: 'Сохранить',
      styles: {
        buttonClass: 'button-save',
      },
      events: {
        click: (e: Event) => {
          this.onClick(e);
        },
      },
    });
  }


  onClick(e: Event) {
    const emailForm = this._formData.get('email') as string;
    const email = emailForm ?
      emailForm :
      JSON.parse(JSON.stringify(this.children.inputEmail)).props.inputValue;

    const loginForm = this._formData.get('login') as string;
    const login = loginForm ?
      loginForm :
      JSON.parse(JSON.stringify(this.children.inputLogin)).props.inputValue;

    const firstNameForm = this._formData.get('first_name') as string;
    const first_name = firstNameForm ?
      firstNameForm :
      JSON.parse(JSON.stringify(this.children.inputFirstName)).props.inputValue;

    const secondNameForm = this._formData.get('second_name') as string;
    const second_name = secondNameForm ?
      secondNameForm :
      JSON.parse(JSON.stringify(this.children.inputSecondName)).props.inputValue;

    const chatNameForm = this._formData.get('chat_name') as string;
    const chat_name = chatNameForm ?
      chatNameForm :
      JSON.parse(JSON.stringify(this.children.inputChatName)).props.inputValue;
    const display_name = chat_name;

    const phoneForm = this._formData.get('phone') as string;
    const phone = phoneForm ?
      phoneForm :
      JSON.parse(JSON.stringify(this.children.inputPhone)).props.inputValue;
    const isValid = clickValidation(
      {
        email,
        login,
        first_name,
        second_name,
        chat_name,
        phone,
      },
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

    if (isValid) {
      UserController.changeUserProfile({
        email,
        login,
        first_name,
        second_name,
        display_name,
        phone,
      });
      e.preventDefault();
    }
  }

  render(): DocumentFragment {
    return this.compile(profileChangeDataTmpl, this.props);
  }
}


const mapStateToProps = (state: IState) => ({
  imgRef: state.user?.avatar
});

export const ProfileChangeData = withStore(mapStateToProps)(ProfileChangeDataBase);
