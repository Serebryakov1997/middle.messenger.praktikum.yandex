import './profileChangePasswd.css';
import { profileChangePasswdTmpl } from './profileChangePasswd.tmpl';
import { ProfileChangePasswdField, Button } from '../../components';
import { DEV_LINK_ADDRESS, PASSWD_PLACEHOLDER } from '../../utils';
import Handlebars from 'handlebars';


export const ProfileChangePasswd = () => Handlebars.compile(profileChangePasswdTmpl)({
    containerClass: 'profile-container',
    avatarName: 'avatar',
    oldPasswd: ProfileChangePasswdField(
        'oldPassword',
        'password-input',
        'Старый пароль',
        PASSWD_PLACEHOLDER
    ),
    newPasswd: ProfileChangePasswdField(
        'newPassword',
        'password-input',
        'Новый пароль',
        PASSWD_PLACEHOLDER
    ),
    repeatNewPasswd: ProfileChangePasswdField(
        'newPassword',
        'password-input',
        'Повторите новый пароль',
        PASSWD_PLACEHOLDER
    ),
    buttonSave: Button(
        'button-save-passwd',
        DEV_LINK_ADDRESS + 'profile',
        'Сохранить'
    )
});