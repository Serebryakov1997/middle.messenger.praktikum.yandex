import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

export const Input = (inputLabel, placeholder) => Handlebars.compile(inputTmpl)({
    inputLabel: inputLabel,
    // offset: 
});