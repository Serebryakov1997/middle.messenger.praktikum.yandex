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
  Button, InputBase, Label, ValidError,
} from '../../components';
import { profileChangeDataTmpl } from './profileChangeData.tmpl';


export class ProfileChangeData extends Block {

  constructor() {
    super({
      styles: {
        containerClass: 'profile-container',
        avatarNameClass: 'avatar',
      },
      avatarName: 'avatar',
    });
  }

  protected init(): void {
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
          // this._formData.set('email', (<HTMLInputElement>e.target).value);
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
          // this._formData.set('login', (<HTMLInputElement>e.target).value);
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
          // this._formData.set('first_name', (<HTMLInputElement>e.target).value);
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
          // this._formData.set('second_name', (<HTMLInputElement>e.target).value);
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
    //   labelChatName: new Label({
    //     name: 'chat_name',
    //     labelName: 'Имя в чате',
    //     styles: {
    //       labelClass: 'profile-label',
    //     },
    //   }),
    //   inputChatName: new InputBase({
    //     name: 'chat_name',
    //     validErrorId: 'error',
    //     inputType: 'text',
    //     inputValue: mockData.chat_name,
    //     styles: {
    //       inputClass: 'profile-input',
    //     },
    //     events: {
    //       blur: (e: Event) => {
    //         this._formData.set('chat_name', (<HTMLInputElement>e.target).value);
    //         inputValidation(e, firstNameValidator, {
    //           validError: <Block>this.children.validErrorChatName,
    //           input: <Block>this.children.inputChatName,
    //           button: <Block>this.children.buttonSave,
    //         });
    //       },
    //     },
    //   }),
    //   validErrorChatName: new ValidError({
    //     styles: {
    //       validErrClass: 'valid-err',
    //     },
    //     validErrorId: 'error',
    //   }),

    //   // Phone
    //   labelPhone: new Label({
    //     name: 'phone',
    //     labelName: 'Телефон',
    //     styles: {
    //       labelClass: 'profile-label',
    //     },
    //   }),
    //   inputPhone: new InputBase({
    //     name: 'phone',
    //     validErrorId: 'error',
    //     inputType: 'text',
    //     inputValue: mockData.phone,
    //     styles: {
    //       inputClass: 'profile-input',
    //     },
    //     events: {
    //       blur: (e: Event) => {
    //         this._formData.set('phone', (<HTMLInputElement>e.target).value);
    //         inputValidation(e, phoneValidator, {
    //           validError: <Block>this.children.validErrorPhone,
    //           input: <Block>this.children.inputPhone,
    //           button: <Block>this.children.buttonSave,
    //         });
    //       },
    //     },
    //   }),
    //   validErrorPhone: new ValidError({
    //     styles: {
    //       validErrClass: 'valid-err',
    //     },
    //     validErrorId: 'error',
    //   }),

    //   buttonSave: new Button({
    //     buttonName: 'Сохранить',
    //     styles: {
    //       buttonClass: 'button-save',
    //     },
    //     events: {
    //       click: (e: Event) => {
    //         const isValid = clickValidation(
    //           this._formData,
    //           {
    //             email: emailValidator,
    //             login: loginValidator,
    //             first_name: firstNameValidator,
    //             second_name: secondNameValidator,
    //             chat_name: firstNameValidator,
    //             phone: phoneValidator,
    //           },
    //           {
    //             email: {
    //               validError: <Block>this.children.validErrorEmail,
    //               input: <Block>this.children.inputEmail,
    //               button: <Block>this.children.buttonSave,
    //             },
    //             login: {
    //               validError: <Block>this.children.validErrorLogin,
    //               input: <Block>this.children.inputLogin,
    //               button: <Block>this.children.buttonSave,
    //             },
    //             first_name: {
    //               validError: <Block>this.children.validErrorFirstName,
    //               input: <Block>this.children.inputFirstName,
    //               button: <Block>this.children.buttonSave,
    //             },
    //             second_name: {
    //               validError: <Block>this.children.validErrorSecondName,
    //               input: <Block>this.children.inputSecondName,
    //               button: <Block>this.children.buttonSave,
    //             },
    //             chat_name: {
    //               validError: <Block>this.children.validErrorPhone,
    //               input: <Block>this.children.inputChatName,
    //               button: <Block>this.children.buttonSave,
    //             },
    //             phone: {
    //               validError: <Block>this.children.validErrorPhone,
    //               input: <Block>this.children.inputPhone,
    //               button: <Block>this.children.buttonSave,
    //             },
    //           },
    //           e,
    //         );
    //         this._formData.forEach((value, key) => {
    //           console.log(`${key}: ${value}`);
    //         });
    //         if (isValid) {
    //           UserController.changeUserProfile({
    //             email: <string>this._formData.get('email'),
    //             login: <string>this._formData.get('login'),
    //             first_name: <string>this._formData.get('first_name'),
    //             second_name: <string>this._formData.get('second_name'),
    //             display_name: <string>this._formData.get('chat_name'),
    //             phone: <string>this._formData.get('phone'),
    //           });
    //           e.preventDefault();
    //         }
    //       },
    //     },
    //   }),
    // };
  }

  render(): DocumentFragment {
    return this.compile(profileChangeDataTmpl, this.props);
  }
}
