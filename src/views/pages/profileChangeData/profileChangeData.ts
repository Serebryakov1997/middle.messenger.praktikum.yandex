import { emailValidator, firstNameValidator, loginValidator, passwdValidator, phoneValidator, secondNameValidator } from '../../../models/validators';
import { Block, DEV_LINK_ADDRESS, clickValidation, inputValidation } from '../../../utils';
import { Button, Input, Label, ValidError } from '../../components';
import { profileChangeDataTmpl } from './profileChangeData.tmpl';

const inputStyles = {
    top: '20px',
    left: '350px',
    'text-align': 'right',
    border: 'none'
}
const validErrStyles = {
    'text-align': 'right'
}

const mockFormDataValues = {
    email: 'ivanivanov@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    chat_name: 'Иван',
    phone: '+79099673030'
}

export class ProfileChangeData extends Block {

    _formData: FormData;

    constructor() {
        super('form', {
            buttonLink: `${DEV_LINK_ADDRESS}profile`,
            styles: {
                containerClass: 'profile-container',
                avatarNameClass: 'avatar',
            },
            avatarName: 'avatar',
        });
        this._formData = new FormData();
        Object.entries(mockFormDataValues).forEach(([key, value]) => {
            this._formData.set(key, value);
        });
    }

    protected init(): void {
        this.children = {
            // email
            labelEmail: new Label({
                name: 'email',
                labelName: 'Почта',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputEmail: new Input('input', {
                name: 'email',
                validErrorId: 'error',
                // inputValue: 'ivanivanov',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('email', (<HTMLInputElement>e.target).value);
                        inputValidation(e, emailValidator, {
                            validError: <Block>this.children.validErrorEmail,
                            input: <Block>this.children.inputEmail,
                            button: <Block>this.children.buttonSave
                        });
                    }
                }
            }).changeStyles(inputStyles).changeAttributes({
                value: mockFormDataValues.email
            }),
            validErrorEmail: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
                },
                validErrorId: 'error',
            }).changeStyles(validErrStyles),

            // login
            labelLogin: new Label({
                name: 'login',
                labelName: 'Логин',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputLogin: new Input('input', {
                name: 'login',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('login', (<HTMLInputElement>e.target).value);
                        inputValidation(e, loginValidator, {
                            validError: <Block>this.children.validErrorLogin,
                            input: <Block>this.children.inputLogin,
                            button: <Block>this.children.buttonSave
                        });
                    }
                }
            }).changeStyles(inputStyles).changeAttributes({
                value: mockFormDataValues.login
            }),
            validErrorLogin: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
                },
                validErrorId: 'error',
            }).changeStyles(validErrStyles),

            // first_name
            labelFirstName: new Label({
                name: 'first_name',
                labelName: 'Имя',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputFirstName: new Input('input', {
                name: 'first_name',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('first_name', (<HTMLInputElement>e.target).value);
                        inputValidation(e, firstNameValidator, {
                            validError: <Block>this.children.validErrorFirstName,
                            inputFirstName: <Block>this.children.inputFirstName,
                            button: <Block>this.children.buttonSave
                        });
                    }
                }
            }).changeStyles(inputStyles).changeAttributes({
                value: mockFormDataValues.first_name
            }),
            validErrorFirstName: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
                },
                validErrorId: 'error',
            }).changeStyles(validErrStyles),

            //second_name
            labelSecondName: new Label({
                name: 'second_name',
                labelName: 'Фамилия',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputSecondName: new Input('input', {
                name: 'second_name',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('second_name', (<HTMLInputElement>e.target).value);
                        inputValidation(e, secondNameValidator, {
                            validError: <Block>this.children.validErrorSecondName,
                            input: <Block>this.children.inputSecondName,
                            button: <Block>this.children.buttonSave
                        });
                    }
                }
            }).changeStyles(inputStyles).changeAttributes({
                value: mockFormDataValues.second_name
            }),
            validErrorSecondName: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
                },
                validErrorId: 'error',
            }).changeStyles(validErrStyles),


            // chat_name
            labelChatName: new Label({
                name: 'chat_name',
                labelName: 'Имя в чате',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputChatName: new Input('input', {
                name: 'chat_name',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('chat_name', (<HTMLInputElement>e.target).value);
                        inputValidation(e, firstNameValidator, {
                            validError: <Block>this.children.validErrorChatName,
                            input: <Block>this.children.inputChatName,
                            button: <Block>this.children.buttonSave
                        });
                    }
                }
            }).changeStyles(inputStyles).changeAttributes({
                value: mockFormDataValues.chat_name
            }),
            validErrorChatName: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
                },
                validErrorId: 'error'
            }).changeStyles(validErrStyles),


            // Phone
            labelPhone: new Label({
                name: 'phone',
                labelName: 'Телефон',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputPhone: new Input('input', {
                name: 'phone',
                validErrorId: 'error',
                events: {
                    blur: (e: Event) => {
                        this._formData.set('phone', (<HTMLInputElement>e.target).value);
                        inputValidation(e, phoneValidator, {
                            validError: <Block>this.children.validErrorPhone,
                            input: <Block>this.children.inputPhone,
                            button: <Block>this.children.buttonSave
                        });
                    }
                }
            }).changeStyles(inputStyles).changeAttributes({
                value: mockFormDataValues.phone
            }),
            validErrorPhone: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err',
                },
                validErrorId: 'error',
            }).changeStyles(validErrStyles),


            buttonSave: new Button('button-save', {
                buttonName: 'Сохранить',
                styles: {
                    buttonClass: 'button-save'
                },
                events: {
                    click: (e: Event) => {
                        clickValidation(this._formData,
                            {
                                email: emailValidator,
                                login: loginValidator,
                                first_name: firstNameValidator,
                                second_name: secondNameValidator,
                                chat_name: firstNameValidator,
                                phone: phoneValidator
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
                                    button: <Block>this.children.buttonSave
                                },
                                first_name: {
                                    validError: <Block>this.children.validErrorFirstName,
                                    input: <Block>this.children.inputFirstName,
                                    button: <Block>this.children.buttonSave
                                },
                                second_name: {
                                    validError: <Block>this.children.validErrorSecondName,
                                    input: <Block>this.children.inputSecondName,
                                    button: <Block>this.children.buttonSave
                                },
                                chat_name: {
                                    validError: <Block>this.children.validErrorPhone,
                                    input: <Block>this.children.inputChatName,
                                    button: <Block>this.children.buttonSave
                                },
                                phone: {
                                    validError: <Block>this.children.validErrorPhone,
                                    input: <Block>this.children.inputPhone,
                                    button: <Block>this.children.buttonSave
                                }
                            },
                            e
                        );
                        this._formData.forEach((value, key) => {
                            console.log(`${key}: ${value}`);
                        });
                    }
                }
            }),
        };
    }

    render(): DocumentFragment {
        return this.compile(profileChangeDataTmpl, this.props);
    }
}



// emailField: new ProfileField({
//     styles: ProfileFieldStyles,
//     changeDataFieldName: 'email',
//     changeDataInputId: 'email-input',
//     labelNameInput: 'Почта',
//     profileFieldValue: 'ivanivanov@yandex.ru',
//     validErrorId: 'error',
//     events: {
//         blur: (e: Event) => {
//             console.log('blur in emailField: ', (<HTMLInputElement>e.target).value);
//             inputValidation(e, emailValidator, {
//                 validError: <Block>this.children.validErrorEmail,
//                 input: <Block>this.children.emailField,
//                 button: <Block>this.children.buttonSave,
//             });
//         }
//     }
// }),
// validErrorEmail: new ValidError('div', {
//     styles: {
//         validErrClass: 'valid-err',
//         validErrProfileClass: 'profile-valid-err'
//     },
//     validErrorId: 'error'
// }),


// loginField: new ProfileField({
//     styles: ProfileFieldStyles,
//     changeDataFieldName: 'login',
//     changeDataInputId: 'login-input',
//     labelNameInput: 'Логин',
//     profileFieldValue: 'ivanivanov'
// }),
// firstNameField: new ProfileField({
//     styles: ProfileFieldStyles,
//     changeDataFieldName: 'first_name',
//     changeDataInputId: 'first-name-input',
//     labelNameInput: 'Имя',
//     profileFieldValue: 'Иван',
// }),
