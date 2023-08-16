import './register.css';
import { registerTmpl } from './register.tmpl';
import { Button, Input } from '../../components';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';


const styles = {
    containerClass: 'register-container',
    headerClass: 'register-header',
    underButtonClass: 'register-button__under-text',
};


export const Register = () => Handlebars.compile(registerTmpl)({
    styles: styles,
    headerName: 'Регистрация',
    inputEmail: Input('Почта', 'email', 'ivan.ivanov@yandex.ru'),
    inputLogin: Input('Логин', 'login', 'ivanivanov'),
    inputFirstName: Input('Имя', 'first_name', 'Иван'),
    inputLastName: Input('Фамилия', 'second_name', 'Иванов'),
    inputFhoneNumber: Input('Телефон', 'phone', '+7(909)9673030'),
    inputPasswd: Input('Пароль', 'password', ''),
    inputPasswdAgain: Input('Пароль (ещё раз)', 'password', ''),
    buttonLink: DEV_LINK_ADDRESS,
    registerButton: Button('register-button', 'Зарегистрироваться'),
    underButtonText: 'Войти',
    loginLink: DEV_LINK_ADDRESS
});
