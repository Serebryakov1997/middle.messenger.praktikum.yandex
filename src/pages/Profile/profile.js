import './profile.css';
import { profileTmpl } from './profile.tmpl';
import { ProfileField } from '../../components';
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
    changeLineClass: 'change-line',
    changeDataName: 'Изменить данные',
    changePasswdName: 'Изменить пароль',
    logout: 'logout',
    logoutName: 'Выйти'
});