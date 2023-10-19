import './register.css';
import {
    Block, DEV_LINK_ADDRESS, clickValidation, inputValidation,
} from '../../../utils';
import { registerTmpl } from './register.tmpl';
import {
    Button, Input, Label, ValidError,
} from '../../components';
import { emailValidator, firstNameValidator, loginValidator, passwdValidator, phoneValidator, secondNameValidator } from '../../../models/validators';

export class Register extends Block {
    _formData: FormData;

    constructor() {
        super('form', {
            styles: {
                registerContainerClass: 'register-container',
                registerHeaderClass: 'register-header',
            },
            registerHeaderName: 'Регистрация',
            buttonLink: DEV_LINK_ADDRESS,
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
                events: {
                    blur: (e: Event) => {
                        this._formData.set('email', (<HTMLInputElement>e.target).value);
                        inputValidation(e, emailValidator, {
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
                labelName: 'Логин'
            }),
            inputLogin: new Input({
                name: 'login',
                placeholder: 'ivanivanov',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('login', (<HTMLInputElement>e.target).value);
                        inputValidation(e, loginValidator, {
                            validError: this.children.validErrorLogin as Block,
                            input: this.children.inputLogin as Block,
                            button: this.children.registerButton as Block
                        });
                    }
                }
            }),

            validErrorLogin: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error'
            }),

            // name
            labelName: new Label({
                name: 'name',
                labelName: 'Имя'
            }),

            inputName: new Input({
                name: 'first_name',
                placeholder: 'Иван',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('first_name', (<HTMLInputElement>e.target).value);
                        inputValidation(e, firstNameValidator, {
                            validError: <Block>this.children.validErrorName,
                            input: <Block>this.children.inputName,
                            button: <Block>this.children.registerButton
                        });
                    }
                }
            }),

            validErrorName: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error'
            }),

            // surname
            labelSurName: new Label({
                name: 'second_name',
                labelName: 'Фамилия'
            }),

            inputSurName: new Input({
                name: 'second_name',
                placeholder: 'Иванов',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('second_name', (<HTMLInputElement>e.target).value);
                        inputValidation(e, secondNameValidator, {
                            validError: <Block>this.children.validErrorSurName,
                            input: <Block>this.children.inputSurName,
                            button: <Block>this.children.registerButton
                        });
                    }
                }
            }),

            validErrorSurName: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error'
            }),

            // phone
            labelPhone: new Label({
                name: 'phone',
                labelName: 'Телефон'
            }),

            inputPhone: new Input({
                name: 'phone',
                placeholder: '+7 (909) 967 30 30',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('phone', (<HTMLInputElement>e.target).value);
                        inputValidation(e, phoneValidator, {
                            validError: <Block>this.children.validErrorPhone,
                            input: <Block>this.children.inputPhone,
                            button: <Block>this.children.registerButton
                        });
                    }
                }
            }),
            validErrorPhone: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error'
            }),

            // passwd
            labelPasswd: new Label({
                name: 'password',
                labelName: 'Пароль'
            }),
            inputPasswd: new Input({
                name: 'password',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('password', (<HTMLInputElement>e.target).value);
                        inputValidation(e, passwdValidator, {
                            validError: <Block>this.children.validErrorPasswd,
                            input: <Block>this.children.inputPasswd,

                        });
                    }
                }
            }),
            validErrorPasswd: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error'
            }),

            registerButton: new Button('register-button', {
                buttonName: 'Зарегистрироваться',
                styles: {
                    buttonClass: 'register-button',
                },
                events: {
                    click: (e: Event) => {
                        clickValidation(
                            this._formData,
                            {
                                email: emailValidator,
                                login: loginValidator,
                                first_name: firstNameValidator,
                                second_name: secondNameValidator
                            },
                            {
                                email: {
                                    validError: this.children.validErrorEmail as Block,
                                    input: this.children.inputEmail as Block,
                                    button: this.children.registerButton as Block,
                                },
                                login: {
                                    validError: this.children.validErrorLogin as Block,
                                    input: this.children.inputLogin as Block,
                                    button: this.children.registerButton as Block
                                },
                                first_name: {
                                    validError: <Block>this.children.validErrorName,
                                    input: <Block>this.children.inputName,
                                    button: <Block>this.children.registerButton
                                },
                                second_name: {
                                    validError: <Block>this.children.validErrorSurName,
                                    input: <Block>this.children.inputSurName,
                                    button: <Block>this.children.registerButton
                                }
                            },
                            e,
                        );
                        this._formData.forEach((value, key) => {
                            console.log(`${key}: ${value}`);
                        });
                    },
                },
            }),
        };
    }

    render(): DocumentFragment {
        return this.compile(registerTmpl, this.props);
    }
}
