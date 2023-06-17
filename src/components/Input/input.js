import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

export const Input = (name, placeholder, inputClass) => Handlebars.compile(inputTmpl)({
    name: name,
    placeholder: placeholder,
    inputClass: inputClass
});