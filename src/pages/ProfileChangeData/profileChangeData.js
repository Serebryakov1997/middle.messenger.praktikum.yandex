import './profileChangeData.css';
import { profileChangeDataTmpl } from './profileChangeData.tmpl';
import { Button, ProfileField } from '../../components';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';


const styles = {
    containerClass: 'profile-container',
};


export const ProfileChangeData = () => Handlebars.compile(profileChangeDataTmpl)({
    styles: styles,
    avatarName: 'avatar',
    emailField: ProfileField('email', 'email-input', 'Почта'),
    loginField: ProfileField('login', 'login-input', 'Логин'),
    firstNameField: ProfileField('first_name', 'first_name-input', 'Имя'),
    secondNameField: ProfileField('second_name', 'second_name-input', 'Фамилия'),
    displayNameField: ProfileField('display_name', 'display_name-input', 'Имя в чате'),
    phoneField: ProfileField('phone', 'phone_name-input', 'Телефон'),
    buttonSave: Button('button-save', DEV_LINK_ADDRESS + 'profile', 'Сохранить')
});