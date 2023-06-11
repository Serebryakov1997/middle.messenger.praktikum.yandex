import './login.css';
import { loginTmpl } from './login.tmpl';
import { Input } from '../../components/input/input';
import Handlebars from 'handlebars';

let isPasswd = true;

export const Login = () => Handlebars.compile(loginTmpl)({
    formName: 'login-form',
    textFormName: 'login-form__title',
    blockName: 'Вход',
    textLoginName: 'login-form__font-color',
    loginName: 'Логин',
    inputLoginComponent: Input(),
    textPasswordName: 'login-form__font-color',
    position: 'login-form__password-title',
    passwordName: 'Пароль',
    inputPasswordComponent: Input(isPasswd),
});