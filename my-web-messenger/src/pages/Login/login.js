import './login.css';
import { loginTmpl } from './login.tmpl';
import Handlebars from 'handlebars';

export const Login = () => Handlebars.compile(loginTmpl)({ name: 'Click me!' });