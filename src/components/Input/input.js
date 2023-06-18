import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

export const Input = (name, placeholder) => Handlebars.compile(inputTmpl)({
    name: name,
    placeholder: placeholder,
    inputClass: 'input-top'
});