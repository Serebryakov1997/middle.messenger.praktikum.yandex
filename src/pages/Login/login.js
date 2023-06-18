import './login.css';
import { loginTmpl } from './login.tmpl';
import { Input, Button } from '../../components';
import Handlebars from 'handlebars';

export const Login = () => Handlebars.compile(loginTmpl)({
    containerClass: 'login-container',
    headerClass: 'login-header',
    headerName: 'Вход',
    inputLogin: Input('Логин', 'ivanivanov'),
    inputPasswd: Input('Пароль', ''),
    loginButton: Button('login-button', 'Войти'),
    underButtonClass: 'login-button__under-text',
    underButtonText: 'Нет аккаунта?'
});