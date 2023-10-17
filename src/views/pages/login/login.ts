import './login.css';
import { Block, DEV_LINK_ADDRESS } from '../../../utils';
import { Button, Input, Label, UnderButtonLink, ValidError } from '../../components';
import { loginTmpl } from './login.tmpl';
import { loginValidator, passwdValidator } from '../../../models/validators';


export class Login extends Block {

    _formData: FormData;

    constructor() {
        super('form', {
            styles: {
                containerClass: 'login-container',
                headerClass: 'login-header',
                underButtonClass: 'login-button__under-text',
            },
            headerName: 'Вход',
            buttonLink: DEV_LINK_ADDRESS + 'chats',
            registerLink: DEV_LINK_ADDRESS + 'register',
            underButtonText: 'Нет аккаунта?'
        });
        this._formData = new FormData();
    }


    protected init(): void {
        this.children = {
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
                        this.inputValidation(e, loginValidator, {
                            validError: this.children.validErrorLogin as Block,
                            input: this.children.inputLogin as Block,
                            loginButton: this.children.loginButton as Block,
                            underButtonLink: this.children.underButtonLink as Block
                        });
                    },
                }
            }),
            validErrorLogin: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error',
            }),
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
                        this.inputValidation(e, passwdValidator, {
                            validError: this.children.validErrorPasswd as Block,
                            input: this.children.inputPasswd as Block,
                            loginButton: this.children.loginButton as Block,
                            underButtonLink: this.children.underButtonLink as Block
                        });
                    },
                },
            }),
            validErrorPasswd: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error',
            }),
            loginButton: new Button('login-button', {
                buttonName: 'Войти',
                styles: {
                    buttonClass: 'login-button',
                },
                events: {
                    click: (e: Event) => {
                        this.clickValidation(
                            ['login', 'password'],
                            this._formData,
                            {
                                login: loginValidator,
                                password: passwdValidator
                            },
                            {
                                login: {
                                    validError: this.children.validErrorLogin as Block,
                                    input: this.children.inputLogin as Block,
                                    loginButton: this.children.loginButton as Block,
                                    underButtonLink: this.children.underButtonLink as Block
                                },
                                password: {
                                    validError: this.children.validErrorPasswd as Block,
                                    input: this.children.inputPasswd as Block,
                                    loginButton: this.children.loginButton as Block,
                                    underButtonLink: this.children.underButtonLink as Block
                                },
                            },
                            e
                        );
                        const loginForm = {
                            'login': this._formData.get('login'),
                            'password': this._formData.get('password')
                        }
                        console.log(loginForm);
                    }
                }
            }),
            underButtonLink: new UnderButtonLink('under-text', {
                styles: {
                    underButtonClass: 'under-text',
                },
                registerLink: DEV_LINK_ADDRESS + 'register',
                underButtonText: 'Нет аккаунта?',
                events: {
                    click: (e: Event) => {
                        this.clickValidation(
                            ['login', 'password'],
                            this._formData,
                            {
                                login: loginValidator,
                                password: passwdValidator
                            },
                            {
                                login: {
                                    validError: this.children.validErrorLogin as Block,
                                    input: this.children.inputLogin as Block,
                                    loginButton: this.children.loginButton as Block,
                                    underButtonLink: this.children.underButtonLink as Block
                                },
                                password: {
                                    validError: this.children.validErrorPasswd as Block,
                                    input: this.children.inputPasswd as Block,
                                    loginButton: this.children.loginButton as Block,
                                    underButtonLink: this.children.underButtonLink as Block
                                },
                            },
                            e
                        );
                    }
                }
            })
        }
    }

    render(): DocumentFragment {
        return this.compile(loginTmpl, this.props);
    }
}
