import './profile.css';
import { Block, DEV_LINK_ADDRESS, inputValidation } from '../../../utils';
import { profileTmpl } from './profile.tmpl';
import { Input, Label, ValidError } from '../../components';
import { emailValidator } from '../../../models/validators';


const mockData = {
    email: 'ivanivanov@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    chat_name: 'Иван',
    phone: '+79099673030'
}


export class Profile extends Block {

    _formData: FormData;

    constructor() {
        super('form', {
            styles: {
                containerClass: 'profile-container',
                displayNameClass: 'display-name',
                statusClass: 'status',
                changeDataClass: 'change-data',
                changePasswordClass: 'change-passwd',
                logoutClass: 'logout',
            },
            name: 'avatar',
            dislpayFieldName: 'display_name',
            displayName: 'Иван',
            statusName: 'online',
            changeDataLink: `${DEV_LINK_ADDRESS}profile_change_data`,
            changeDataName: 'Изменить данные',
            changePasswordLink: `${DEV_LINK_ADDRESS}profile_change_passwd`,
            changePasswdName: 'Изменить пароль',
            toLoginLink: DEV_LINK_ADDRESS,
            logoutName: 'Выйти'
        });
        this._formData = new FormData();
        Object.entries(mockData).forEach(([key, value]) => {
            this._formData.set(key, value);
        });
    }


    protected init(): void {
        this.children = {
            labelEmail: new Label({
                name: 'email',
                labelName: 'Почта',
                styles: {
                    labelClass: 'profile-label'
                }
            }),
            inputEmail: new Input({
                name: 'email',
                validErrorId: 'error',
                styles: {
                    inputProfileClass: 'profile-input'
                },
                inputType: 'text',
                inputValue: mockData.email,
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
            }),
            validErrorEmail: new ValidError('div', {
                styles: {
                    validErrClass: 'valid-err'
                },
                validErrorId: 'error'
            }),
        }
    }

    render(): DocumentFragment {
        return this.compile(profileTmpl, this.props);
    }
}
