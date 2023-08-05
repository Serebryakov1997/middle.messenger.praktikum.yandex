import './profileChangePasswd.css';
import { profileChangePasswdTmpl } from './profileChangePasswd.tmpl';
import { ProfileField, Button } from '../../components';
import { DEV_LINK_ADDRESS, PASSWD_PLACEHOLDER } from '../../utils';
import Handlebars from 'handlebars';


const passwdInput = 'password-input';

const styles = {
    containerClass: 'profile-container',
};


export const ProfileChangePasswd = () => Handlebars.compile(profileChangePasswdTmpl)({
    styles: styles,
    avatarName: 'avatar',
    oldPasswd: ProfileField('oldPassword', passwdInput, 'Старый пароль', PASSWD_PLACEHOLDER),
    newPasswd: ProfileField('newPassword', passwdInput, 'Новый пароль', PASSWD_PLACEHOLDER),
    repeatNewPasswd: ProfileField('newPassword', passwdInput, 'Повторите новый пароль', PASSWD_PLACEHOLDER),
    buttonSave: Button('button-save-passwd', DEV_LINK_ADDRESS + 'profile', 'Сохранить')
});
