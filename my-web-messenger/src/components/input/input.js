import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

export const Input = (inputLabel, placeholder) => Handlebars.compile(inputTmpl)({
    inputBoxName: 'input-box',
    offset: inputLabel === 'Логин' ? '' : 'offset-top',
    labelClass: 'label',
    labelName: inputLabel,
    input: 'input',
    placeholder: placeholder
});