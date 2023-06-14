import { Input } from '../../components/Input/input';
import './login.css';
import { loginTmpl } from './login.tmpl';
import Handlebars from 'handlebars';

export const Login = () => Handlebars.compile(loginTmpl)({
    blockName: 'Вход',
    inputLogin: Input('Логин')
});