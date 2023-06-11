import './login.css';
import { loginTmpl } from './login.tmpl';
import Handlebars from 'handlebars';

export const Login = () => Handlebars.compile(loginTmpl)({
    formName: 'login-form',
    textFormName: 'login-form__text',
    blockName: 'Вход',
    textLoginName: 'login-form__login-title',
    loginName: 'Логин',
    loginLineName: 'login-form__login-line',
    textPasswordName: 'login-form__password-title',
    passwordName: 'Пароль'
});