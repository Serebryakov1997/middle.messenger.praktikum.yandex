import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

const styles = {
    inputClass: 'input-top'
}

export const Input = (labelName, name, placeholder) => Handlebars.compile(inputTmpl)({
    styles: styles,
    labelName: labelName,
    name: name,
    placeholder: placeholder,
});
