import './profileChangePasswd.css';
import { passwdValidator } from '../../../models/validators';
import {
  clickValidation,
  inputValidation,
} from '../../../utils';
import {
  ButtonBase, InputBase, Label, ValidError,
} from '../../components';
import { profileChangePasswdTmpl } from './profileChangePasswd.tmpl';
import { Block } from '../../../core';
import { UserController } from '../../../controllers/user-controller';


export class ProfileChangePasswd extends Block {
  _formData: FormData;

  constructor() {
    super({
      styles: {
        containerClass: 'profile-container',
        avatarNameClass: 'avatar',
      },
      avatarName: 'avatar',
    });
    this._formData = new FormData();
  }

  protected init(): void {
    this.children = {
      // password
      labelPasswd: new Label({
        name: 'password',
        labelName: 'Старый пароль',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputPasswd: new InputBase({
        name: 'password',
        validErrorId: 'error',
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'password',
        events: {
          blur: (e: Event) => {
            this._formData.set('password', (<HTMLInputElement>e.target).value);
            inputValidation(e, passwdValidator, {
              validError: <Block>this.children.validErrorPasswd,
              input: <Block>this.children.inputPasswd,
              button: <Block>this.children.buttonSave,
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

      // new_password
      labelNewPasswd: new Label({
        name: 'new_password',
        labelName: 'Новый пароль',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputNewPasswd: new InputBase({
        name: 'new_password',
        validErrorId: 'error',
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'password',
        events: {
          blur: (e: Event) => {
            this._formData.set('new_password', (<HTMLInputElement>e.target).value);
            inputValidation(e, passwdValidator, {
              validError: <Block>this.children.validErrorNewPasswd,
              input: <Block>this.children.inputNewPasswd,
              button: <Block>this.children.buttonSave,
            });

            const newRepeatPassword = this._formData.get('repeat_new_password');
            if (newRepeatPassword) {
              // const repeatPassword = 
            }
          },
        },
      }),
      validErrorNewPasswd: new ValidError({
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      // repeat_new_password
      labelRepeatNewPasswd: new Label({
        name: 'repeat_new_password',
        labelName: 'Повторите новый пароль',
        styles: {
          labelClass: 'profile-label',
        },
      }),
      inputRepeatNewPasswd: new InputBase({
        name: 'repeat_new_password',
        validErrorId: 'error',
        styles: {
          inputClass: 'profile-input',
        },
        inputType: 'password',
        events: {
          blur: (e: Event) => {
            this._formData.set('repeat_new_password', (<HTMLInputElement>e.target).value);
            inputValidation(e, passwdValidator, {
              validError: <Block>this.children.validErrorRepeatNewPasswd,
              input: <Block>this.children.inputRepeatNewPasswd,
              button: <Block>this.children.buttonSave,
            });
          },
        },
      }),
      validErrorRepeatNewPasswd: new ValidError({
        styles: {
          validErrClass: 'valid-err',
        },
        validErrorId: 'error',
      }),

      buttonSave: new ButtonBase({
        buttonName: 'Сохранить',
        styles: {
          buttonClass: 'button-save',
          buttonNameClass: 'auth-button-name settings-button-name'
        },
        events: {
          click: (e: Event) => {
            const password = this._formData.get('password') as string;
            const new_password = this._formData.get('new_password') as string;
            const repeat_new_password = this._formData.get('repeat_new_password') as string;
            const isValid = clickValidation(
              {
                password,
                new_password,
                repeat_new_password
              },
              {
                password: passwdValidator,
                new_password: passwdValidator,
                repeat_new_password: passwdValidator,
              },
              {
                password: {
                  validError: <Block>this.children.validErrorPasswd,
                  input: <Block>this.children.inputPasswd,
                  button: <Block>this.children.buttonSave,
                },
                new_password: {
                  validError: <Block>this.children.validErrorNewPasswd,
                  input: <Block>this.children.inputNewPasswd,
                  button: <Block>this.children.buttonSave,
                },
                repeat_new_password: {
                  validError: <Block>this.children.validErrorRepeatNewPasswd,
                  input: <Block>this.children.inputRepeatNewPasswd,
                  button: <Block>this.children.buttonSave,
                },
              },
              e,
            );
            this._formData.forEach((value, key) => {
              console.log(`${key}: ${value}`);
            });
            if (isValid) {
              UserController.changeUserPasswd({
                oldPassword: password,
                newPassword: new_password
              })
              e.preventDefault();
            }
          },
        },
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(profileChangePasswdTmpl, this.props);
  }
}
