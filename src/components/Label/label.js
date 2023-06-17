import './label.css';
import { labelTmpl } from './label.tmpl';
import Handlebars from 'handlebars';

export const Label = (text) => Handlebars.compile(labelTmpl)({
    inputName: 'Логин',
    text: text
});