import './profile.css';
import { profileTmpl } from './profile.tmpl';
import { AvatarLoader, ProfileField } from '../../components';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';


const styles = {
    containerClass: 'profile-container',
    darkScreen: 'dark-screen',
    imgType: 'submit',
    cameraClass: 'camera-button',
    displayNameClass: 'display-name',
    statusClass: 'status',
    changeDataClass: 'change-data',
    changePasswordClass: 'change-passwd',
    logoutClass: 'logout',
};


const displayBlock = `document.getElementById('avatar-loader-id').style.display = 'block'`;

export const Profile = () => Handlebars.compile(profileTmpl)({
    styles: styles,
    name: 'avatar',
    displayFieldName: 'display_name',
    displayName: 'Иван',
    statusName: 'online',
    avatarBlock: AvatarLoader(),
    displayBlock: displayBlock,
    emailField: ProfileField('email', 'email-input', 'Почта', '', 'ivan.ivanov@yandex.ru', 'readonly'),
    loginField: ProfileField('login', 'login-input', 'Логин', '', 'ivanivanov', 'readonly'),
    firstNameField: ProfileField('first_name', 'first-name-input', 'Имя', '', 'Иван', 'readonly'),
    secondNameField: ProfileField('second_name', 'second-name-input', 'Фамилия', '', 'Иванов', 'readonly'),
    displayNameField: ProfileField('display_name', 'display-name-input', 'Имя в чате', '', 'Иван', 'readonly'),
    phoneField: ProfileField('phone', 'phone-input', 'Телефон', '', '+7(909)39393939', 'readonly'),
    changeDataLink: DEV_LINK_ADDRESS + 'profile_change_data',
    changeDataName: 'Изменить данные',
    changePasswordLink: DEV_LINK_ADDRESS + 'profile_change_passwd',
    changePasswdName: 'Изменить пароль',
    toLoginLink: DEV_LINK_ADDRESS,
    logoutName: 'Выйти'
});