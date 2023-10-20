import './login.css';
import {
    Block,
    DEV_LINK_ADDRESS,
    clickValidation,
    inputValidation,
} from '../../../utils';
import {
    Button, Input, Label, UnderButtonLink, ValidError,
} from '../../components';
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
            buttonLink: `${DEV_LINK_ADDRESS}chats`,
            registerLink: `${DEV_LINK_ADDRESS}register`,
            underButtonText: 'Нет аккаунта?',
        });
        this._formData = new FormData();
    }

    protected init(): void {
        this.children = {
            labelLogin: new Label({
                name: 'login',
                labelName: 'Логин',
            }),
            inputLogin: new Input('input', {
                name: 'login',
                placeholder: 'ivanivanov',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('login', (<HTMLInputElement>e.target).value);
                        inputValidation(e, loginValidator, {
                            validError: this.children.validErrorLogin as Block,
                            input: this.children.inputLogin as Block,
                            button: this.children.loginButton as Block,
                        });
                    },
                },
            }),
            validErrorLogin: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
                },
                validErrorId: 'error',
            }),
            labelPasswd: new Label({
                name: 'password',
                labelName: 'Пароль',
            }),
            inputPasswd: new Input('input', {
                name: 'password',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('password', (<HTMLInputElement>e.target).value);
                        inputValidation(e, passwdValidator, {
                            validError: this.children.validErrorPasswd as Block,
                            input: this.children.inputPasswd as Block,
                            button: this.children.loginButton as Block,
                        });
                    },
                },
            }),
            validErrorPasswd: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
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
                        clickValidation(
                            this._formData,
                            {
                                login: loginValidator,
                                password: passwdValidator,
                            },
                            {
                                login: {
                                    validError: <Block>this.children.validErrorLogin,
                                    input: <Block>this.children.inputLogin,
                                    button: <Block>this.children.loginButton,
                                },
                                password: {
                                    validError: <Block>this.children.validErrorPasswd,
                                    input: <Block>this.children.inputPasswd,
                                    button: <Block>this.children.loginButton,
                                },
                            },
                            e,
                        );
                        this._formData.forEach((value, key) => {
                            console.log(`${key}: ${value}`);
                        })
                    },
                },
            }),
            underButtonLink: new UnderButtonLink('under-text', {
                styles: {
                    underButtonClass: 'under-text',
                },
                link: `${DEV_LINK_ADDRESS}register`,
                underButtonText: 'Нет аккаунта?',
            }),
        };
    }

    render(): DocumentFragment {
        return this.compile(loginTmpl, this.props);
    }
}
