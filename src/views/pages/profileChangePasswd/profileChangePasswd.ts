import './profileChangePasswd.css';
import { passwdValidator } from '../../../models/validators';
import { Block, DEV_LINK_ADDRESS, clickValidation, inputValidation } from '../../../utils';
import { Button, Input, Label, ValidError } from '../../components';
import { profileChangePasswdTmpl } from './profileChangePasswd.tmpl';


const inputStyles = {
    type: 'password',
    top: '25px',
    left: '300px',
    'text-align': 'right',
    border: 'none'
}
const validErrStyles = {
    'text-align': 'right'
}
const mockPassword = 'Password1';


export class ProfileChangePasswd extends Block {

    _formData: FormData;

    constructor() {
        super('form', {
            buttonLink: `${DEV_LINK_ADDRESS}profile`,
            styles: {
                containerClass: 'profile-container',
                avatarNameClass: 'avatar'
            },
            avatarName: 'avatar'
        });
        this._formData = new FormData();
        this._formData.set('password', mockPassword);
    }

    protected init(): void {
        this.children = {
            labelPasswd: new Label({
                name: 'password',
                labelName: 'Старый пароль',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputPasswd: new Input('input', {
                name: 'password',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('password', (<HTMLInputElement>e.target).value);
                        inputValidation(e, passwdValidator, {
                            validError: <Block>this.children.validErrorPasswd,
                            input: <Block>this.children.inputPasswd,
                            button: <Block>this.children.buttonSave,
                        });
                    }
                }
            }).changeStyles(inputStyles).changeAttributes({
                value: mockPassword
            }),
            validErrorPasswd: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error'
            }).changeStyles(validErrStyles),

            labelNewPasswd: new Label({

            }),

            buttonSave: new Button('button-save', {
                buttonName: 'Сохранить',
                styles: {
                    buttonClass: 'button-save'
                },
                events: {
                    click: (e: Event) => {
                        clickValidation(this._formData,
                            {
                                password: passwdValidator,
                                newPassword: passwdValidator,
                                repeatNewPassword: passwdValidator
                            },
                            {
                                password: {
                                    validError: <Block>this.children.validErrorPassword,
                                    input: <Block>this.children.inputPassword,
                                    button: <Block>this.children.buttonSave
                                },
                                newPassword: {
                                    validError: <Block>this.children.validErrorNewPassword,
                                    input: <Block>this.children.inputNewPassword,
                                    button: <Block>this.children.buttonSave
                                },
                                repeatNewPassword: {
                                    validError: <Block>this.children.validErrorRepeatNewPassword,
                                    input: <Block>this.children.inputRepeatNewPasswd,
                                    button: <Block>this.children.buttonSave
                                }
                            },
                            e
                        )
                    }
                }
            })
        }
    }

    render(): DocumentFragment {
        return this.compile(profileChangePasswdTmpl, this.props);
    }
}
