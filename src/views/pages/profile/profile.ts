import './profile.css';
import { Block, DEV_LINK_ADDRESS } from '../../../utils';
import { profileTmpl } from './profile.tmpl';
import { ProfileField } from '../../components';

const ProfileFieldStyles = {
    profileFieldClass: 'profile-field',
    labelClass: 'profile-label',
    inputClass: 'profile-input',
    profileFieldType: 'text'
}


export class Profile extends Block {
    constructor() {
        super('form', {
            styles: {
                containerClass: 'profile-container',
                // cameraClass: 'camera-button',
                // buttonType: 'button',
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
    }


    protected init(): void {
        this.children = {
            // avatarBlock: new AvatarLoader({
            //     styles: {
            //         avatarLoaderClass: 'avatar-loader',
            //         dashedBorderClass: 'dash-border',
            //         textClass: 'text-class',
            //         textOrClass: 'text-or-class'
            //     },
            //     text1Name: 'Перетащите файл сюда',
            //     textOrName: 'или'
            // }),
            // avatarButton: new Button('camera-button', {
            //     buttonName: '',
            //     styles: {
            //         buttonClass: 'camera-button',
            //     },
            //     events: {
            //         click: () => {
            //             (this.children.avatarBlock as Block).show();
            //         }
            //     }
            // }),
            emailField: new ProfileField({
                styles: ProfileFieldStyles,
                changeDataFieldName: 'email',
                changeDataInputId: 'email-input',
                labelNameInput: 'Почта',
                profileFieldValue: 'ivanivanov@yandex.ru',
                readOnly: 'readonly'
            }),
            loginField: new ProfileField({
                styles: ProfileFieldStyles,
                changeDataFieldName: 'login',
                changeDataInputId: 'login-input',
                labelNameInput: 'Логин',
                profileFieldValue: 'ivanivanov',
                readOnly: 'readonly'
            }),
            firstNameField: new ProfileField({
                styles: ProfileFieldStyles,
                changeDataFieldName: 'first_name',
                changeDataInputId: 'first-name-input',
                labelNameInput: 'Имя',
                profileFieldValue: 'Иван',
                readOnly: 'readonly'
            }),
            secondNameField: new ProfileField({
                styles: ProfileFieldStyles,
                changeDataFieldName: 'second_name',
                changeDataInputId: 'second-name-input',
                labelNameInput: 'Фамилия',
                profileFieldValue: 'Иванов',
                readOnly: 'readonly'
            }),
            displayNameField: new ProfileField({
                styles: ProfileFieldStyles,
                changeDataFieldName: 'display_name',
                changeDataInputId: 'display-name-input',
                labelNameInput: 'Имя в чате',
                profileFieldValue: 'Иван',
                readOnly: 'readonly'
            }),
            phoneField: new ProfileField({
                styles: ProfileFieldStyles,
                changeDataFieldName: 'phone',
                changeDataInputId: 'phone-input',
                labelNameInput: 'Телефон',
                profileFieldValue: '+79099673030',
                readOnly: 'readonly'
            })
        }
    }

    render(): DocumentFragment {
        return this.compile(profileTmpl, this.props);
    }
}
