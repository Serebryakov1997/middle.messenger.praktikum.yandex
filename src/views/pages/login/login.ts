import './login.css';
import { Block, DEV_LINK_ADDRESS, validationError } from '../../../utils';
import { Button, Input } from '../../components';
import { loginTmpl } from './login.tmpl';
import { Label } from '../../components/label';
import { loginValidator } from '../../../models/validators';
import { ValidError } from '../../components/validError';


export class Login extends Block {
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
            validErrorId: 'error',
            events: {
                blur: (e: Event) => {
                    const re = loginValidator.rule;
                    const targetValue = (<HTMLInputElement>e.target).value;
                    const isValid = re.test(targetValue);

                    if (!isValid) {
                        const msg = loginValidator.errorMsg;
                        validationError(this.children, msg);

                    } else {

                    }
                    console.log('blur inputLogin: ', e);
                    console.log('targetValue: ', targetValue);
                },
                focus: (e: Event) => {
                    console.log('focus inputLogin: ', e);
                }
            }
        });
        this.children.validErrorLogin = new ValidError('div', {
            styles: {
                validErrClass: 'valid-err'
            },
            validErrorId: 'error',
        });
        this.children.labelPasswd = new Label({
            name: 'password',
            labelName: 'Пароль'
        });
        this.children.inputPasswd = new Input({
            name: 'password',
            styles: {
                inputClass: 'input-top'
            },
            validErrorId: 'error',
            events: {
                blur: (e: Event) => {
                    console.log('blur inputPassword: ', e);
                },
                focus: (e: Event) => {
                    console.log('focus inputPassword: ', e);
                }
            }
        });
        this.children.loginButton = new Button('login-button', {
            buttonName: 'Войти',
            styles: {
                buttonClass: 'login-button',
            },
            events: {
                click: (e: Event) => {
                    // e.preventDefault();
                    console.log('click loginButton: ', e);
                }
            }
        });
    }

    render(): DocumentFragment {
        return this.compile(loginTmpl, this.props);
    }
}
