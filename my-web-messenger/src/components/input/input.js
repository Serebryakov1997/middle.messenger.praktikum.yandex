import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

export const Input = (isPassword) => Handlebars.compile(inputTmpl)({
    input: 'input',
    title: isPassword ? 'password-title' : 'login-title',
    placeholder: isPassword ? '' : 'ivanivanov'
});