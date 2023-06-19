import './profile.css';
import { profileTmpl } from './profile.tmpl';
import { ProfileField } from '../../components';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';


export const Profile = () => Handlebars.compile(profileTmpl)({
    containerClass: 'profile-container',
    name: 'avatar',
    cameraClass: 'camera',
    displayFieldName: 'display_name',
    displayNameClass: 'display-name',
    displayName: 'Иван',
    statusClass: 'status',
    statusName: 'online',
    emailField: ProfileField('email', 'Почта', 'ivan.ivanov@yandex.ru'),
    loginField: ProfileField('login', 'Логин', 'ivanivanov'),
    firstNameField: ProfileField('first_name', 'Имя', 'Иван'),
    secondNameField: ProfileField('second_name', 'Фамилия', 'Иванов'),
    displayNameField: ProfileField('display_name', 'Имя в чате', 'Иван'),
    phoneField: ProfileField('phone', 'Телефон', '+7(909)9673030'),
    changeDataClass: 'change-data',
    changeDataLink: DEV_LINK_ADDRESS + 'profile_change_data',
    changeDataName: 'Изменить данные',
    changePasswordClass: 'change-passwd',
    changePasswordLink: DEV_LINK_ADDRESS + 'profile_change_passwd',
    changePasswdName: 'Изменить пароль',
    logoutClass: 'logout',
    toLoginLink: DEV_LINK_ADDRESS + 'login',
    logoutName: 'Выйти'
});