import './login.css';
import { Block, DEV_LINK_ADDRESS } from '../../../utils';
import { Button, Input } from '../../components';
import { loginTmpl } from './login.tmpl';
import { Label } from '../../components/label';


export class Login extends Block {
    constructor() {
        super('form', {
            buttonLink: DEV_LINK_ADDRESS + 'chats',
            styles: {
                containerClass: 'login-container',
                headerClass: 'login-header',
                headerName: 'Вход',
                underButtonClass: 'login-button__under-text',
                registerLink: DEV_LINK_ADDRESS + 'register',
                underButtonText: 'Нет аккаунта?'
            }
        });
    }

    protected init(): void {
        this.children.labelLogin = new Label({
            name: 'login',
            labelName: 'Логин'
        });
        this.children.inputLogin = new Input({
            name: 'login',
            placeholder: 'ivanivanov',
            styles: {
                inputClass: 'input-top'
            },
            events: {
                blur: (e: Event) => {
                    console.log('blur inputLogin: ', e);
                },
                focus: (e: Event) => {
                    console.log('focus inputLogin: ', e);
                }
            }
        });
        this.children.inputPasswd = new Input({
            name: 'password',
            styles: {
                inputClass: 'input-top'
            },
            events: {
                blur: (e: Event) => {
                    console.log('blur inputPassword: ', e);
                },
                focus: (e: Event) => {
                    console.log('focus inputPassword: ', e);
                }
            }
        });
        this.children.loginButton = new Button({
            styles: {
                authButtonClass: 'main-button',
            },
            buttonClass: 'login-button',
            buttonName: 'Войти',
            events: {
                submit: (e: Event) => {
                    console.log('submit loginButton: ', e);
                }
            }
        });
    }

    render(): DocumentFragment {
        return this.compile(loginTmpl, this.props);
    }
}
