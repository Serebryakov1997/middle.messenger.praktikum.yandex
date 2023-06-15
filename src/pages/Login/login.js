import loginStyles from './login.css?inline';
import { Input } from '../../components/Input/input';
import { loginTmpl } from './login.tmpl';
import Handlebars from 'handlebars';
import { Label } from '../../components/Label/label';

// console.log('loginStyles: ', loginStyles);
export const Login = () => Handlebars.compile(loginTmpl)({
    styles: loginStyles,
    labelLogin: Label(),
    inputLogin: Input('Логин', 'ivanivanov')
});