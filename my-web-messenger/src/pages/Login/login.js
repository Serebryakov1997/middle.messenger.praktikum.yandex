import './login.css';
import { loginTmpl } from './login.tmpl';
import { Input } from '../../components/input/input';
import Handlebars from 'handlebars';


export const Login = () => Handlebars.compile(loginTmpl)({
    formName: 'login-form',
    textFormName: 'login-form__title',
    blockName: 'Вход',
    inputLoginComponent: Input('Логин', 'ivanivanov'),
    inputPasswdComponent: Input('Пароль'),
    inputOtherField: Input('Other')
});