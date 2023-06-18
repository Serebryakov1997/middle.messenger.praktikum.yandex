import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

export const Input = (labelName, name, placeholder) => Handlebars.compile(inputTmpl)({
    labelName: labelName,
    name: name,
    placeholder: placeholder,
    inputClass: 'input-top'
});