import './login.css';
import { loginTmpl } from './login.tmpl';
import { Input, Button } from '../../components';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';


export const Login = () => Handlebars.compile(loginTmpl)({
    containerClass: 'login-container',
    headerClass: 'login-header',
    headerName: 'Вход',
    inputLogin: Input('Логин', 'login', 'ivanivanov'),
    inputPasswd: Input('Пароль', 'password', ''),
    loginButton: Button('login-button', DEV_LINK_ADDRESS + 'chats', 'Войти'),
    underButtonClass: 'login-button__under-text',
    registerLink: DEV_LINK_ADDRESS + 'register',
    underButtonText: 'Нет аккаунта?'
});