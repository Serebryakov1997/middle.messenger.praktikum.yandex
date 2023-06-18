import './login.css';
import { Input } from '../../components/Input/input';
import { loginTmpl } from './login.tmpl';
import Handlebars from 'handlebars';
import { Button } from '../../components/Button/button';


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