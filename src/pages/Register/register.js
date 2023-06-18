import './register.css';
import { registerTmpl } from './register.tmpl';
import { Button, Input } from '../../components';
import Handlebars from 'handlebars';


export const Register = () => Handlebars.compile(registerTmpl)({
    containerClass: 'register-container',
    headerClass: 'register-header',
    headerName: 'Регистрация',
    inputEmail: Input('Почта', 'email', 'ivan.ivanov@yandex.ru'),
    inputLogin: Input('Логин', 'login', 'ivanivanov'),
    inputFirstName: Input('Имя', 'first_name', 'Иван'),
    inputLastName: Input('Фамилия', 'second_name', 'Иванов'),
    inputFhoneNumber: Input('Телефон', 'phone', '+7(909)9673030'),
    inputPasswd: Input('Пароль', 'password', ''),
    inputPasswdAgain: Input('Пароль (ещё раз)', 'password', ''),
    registerButton: Button('register-button', 'Зарегистрироваться'),
    underButtonClass: 'register-button__under-text',
    underButtonText: 'Войти'
});