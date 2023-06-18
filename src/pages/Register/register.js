import './register.css';
import { registerTmpl } from './register.tmpl';
import { Button, Input } from '../../components';
import Handlebars from 'handlebars';


export const Register = () => Handlebars.compile(registerTmpl)({
    containerClass: 'register-container',
    headerClass: 'register-header',
    headerName: 'Регистрация',
    inputEmail: Input('Почта', 'ivan.ivanov@yandex.ru'),
    inputLogin: Input('Логин', 'ivanivanov'),
    inputFirstName: Input('Имя', 'Иван'),
    inputLastName: Input('Фамилия', 'Иванов'),
    inputFhoneNumber: Input('Телефон', '+7(909)9673030'),
    inputPasswd: Input('Пароль', ''),
    inputPasswdAgain: Input('Пароль (ещё раз)', ''),
    registerButton: Button('register-button', 'Зарегистрироваться'),
    underButtonClass: 'register-button__under-text',
    underButtonText: 'Войти'
});