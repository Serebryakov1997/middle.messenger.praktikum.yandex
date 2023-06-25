import './profile.css';
import { profileTmpl } from './profile.tmpl';
import { ProfileField } from '../../components';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';


const styles = {
    containerClass: 'profile-container',
    cameraClass: 'camera',
    displayNameClass: 'display-name',
    statusClass: 'status',
    changeDataClass: 'change-data',
    changePasswordClass: 'change-passwd',
    logoutClass: 'logout',
};


export const Profile = () => Handlebars.compile(profileTmpl)({
    styles: styles,
    name: 'avatar',
    displayFieldName: 'display_name',
    displayName: 'Иван',
    statusName: 'online',
    emailField: ProfileField('email', 'email-input', 'Почта', '', 'readonly'),
    loginField: ProfileField('login', 'login-input', 'Логин', '', 'readonly'),
    firstNameField: ProfileField('first_name', 'first-name-input', 'Имя', '', 'readonly'),
    secondNameField: ProfileField('second_name', 'second-name-input', 'Фамилия', '', 'readonly'),
    displayNameField: ProfileField('display_name', 'display-name-input', 'Имя в чате', '', 'readonly'),
    phoneField: ProfileField('phone', 'phone-input', 'Телефон', '', 'readonly'),
    changeDataLink: DEV_LINK_ADDRESS + 'profile_change_data',
    changeDataName: 'Изменить данные',
    changePasswordLink: DEV_LINK_ADDRESS + 'profile_change_passwd',
    changePasswdName: 'Изменить пароль',
    toLoginLink: DEV_LINK_ADDRESS,
    logoutName: 'Выйти'
});