import './login.css';
import { Block, DEV_LINK_ADDRESS, validationError } from '../../../utils';
import { Button, Input, Label, UnderButtonLink, ValidError } from '../../components';
import { loginTmpl } from './login.tmpl';
import { loginValidator, passwdValidator } from '../../../models/validators';
import { backUpForValid } from '../../../utils/backupForValid';


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

    inputValidation(
        e: Event,
        validator: {
            rule: RegExp;
            errorMsg: string;
        },
        children: { [key: string]: Block }
    ) {
        const re = validator.rule;
        const targetValue = (<HTMLInputElement>e.target).value;
        const isValid = re.test(targetValue);

        if (!isValid || !targetValue) {
            const msg = validator.errorMsg;
            validationError(children, msg);
        } else {
            backUpForValid(children);
        }
    }

    clickValidation(
        keys: string[],
        formData: FormData,
        validators: {
            [key: string]: {
                rule: RegExp;
                errorMsg: string;
            }
        },
        children: { [key: string]: { [key: string]: Block } }) {

        // const isValidArr: Record<string, boolean> = {};
        keys.forEach(key => {
            const formValue = formData.get(key);
            const re = validators[key].rule;

            const isValid = formValue ? re.test(formValue as string) : false;
            // isValidArr[key] = isValid;
            console.log(`${key}: ${isValid}`);
            if (!isValid) {
                const msg = validators[key].errorMsg;
                validationError(children[key], msg);
            } else {
                backUpForValid(children[key]);
            }
        });

        // console.log('isValidErr: ', isValidArr);


        // if (!isValidArr['login']) {
        //     const msg = validators['login'].errorMsg;
        //     validationError(children['login'], msg);
        // }

        // if (!isValid || !formValue) {
        //     console.log('formValue: ', formValue);
        //     const msg = validators[key].errorMsg;
        //     validationError(children[key], msg);
        // } else {
        //     backUpForValid(children[key]);
        // }
    }

    protected init(): void {
        this.children.labelLogin = new Label({
            name: 'login',
            labelName: 'Логин'
        });
        this.children.inputLogin = new Input({
            name: 'login',
            placeholder: 'ivanivanov',
            // styles: {
            //     inputClass: 'input-top'
            // },
            validErrorId: 'error',
            events: {
                blur: (e: Event) => {
                    this._formData.append('login', (<HTMLInputElement>e.target).value);
                    this.inputValidation(e, loginValidator, {
                        validError: this.children.validErrorLogin,
                        input: this.children.inputLogin,
                        loginButton: this.children.loginButton,
                        underButtonLink: this.children.underButtonLink
                    });
                },
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
            // styles: {
            //     inputClass: 'input-top'
            // },
            validErrorId: 'error',
            events: {
                blur: (e: Event) => {
                    this._formData.append('password', (<HTMLInputElement>e.target).value);
                    this.inputValidation(e, passwdValidator, {
                        validError: this.children.validErrorPasswd,
                        input: this.children.inputPasswd,
                        loginButton: this.children.loginButton,
                        underButtonLink: this.children.underButtonLink
                    });
                },
            },
        });
        this.children.validErrorPasswd = new ValidError('div', {
            styles: {
                validErrClass: 'valid-err'
            },
            validErrorId: 'error',
        });
        this.children.loginButton = new Button('login-button', {
            buttonName: 'Войти',
            styles: {
                buttonClass: 'login-button',
            },
            events: {
                click: (e: Event) => {
                    // const el = document.querySelector('input')?.value;
                    // const el2 = (document.getElementById('password') as HTMLInputElement).value;
                    console.log('form of login page: ', this._formData.get('login'));
                    console.log('form of login page passwd: ', this._formData.get('password'));
                    this.clickValidation(
                        ['login', 'password'],
                        this._formData,
                        {
                            login: loginValidator,
                            password: passwdValidator
                        },
                        {
                            login: {
                                validError: this.children.validErrorLogin,
                                input: this.children.inputLogin,
                                loginButton: this.children.loginButton,
                                underButtonLink: this.children.underButtonLink
                            },
                            password: {
                                validError: this.children.validErrorPasswd,
                                input: this.children.inputPasswd,
                                loginButton: this.children.loginButton,
                                underButtonLink: this.children.underButtonLink
                            }
                        }
                    );
                    e.preventDefault();
                }
            }
        });
        this.children.underButtonLink = new UnderButtonLink('under-text', {
            styles: {
                underButtonClass: 'under-text',
            },
            registerLink: DEV_LINK_ADDRESS + 'register',
            underButtonText: 'Нет аккаунта?',
            events: {
                click: (e: Event) => {
                    console.log('click to register: ', e);
                }
            }
        });
    }

    render(): DocumentFragment {
        return this.compile(loginTmpl, this.props);
    }
}
