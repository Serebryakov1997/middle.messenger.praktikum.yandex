import './input.css';
import { inputTmpl } from './input.tmpl';
import Handlebars from 'handlebars';

const styles = {
    inputClass: 'input-top'
}

export const Input = (
    labelName: string,
    name: string,
    placeholder: string
) => Handlebars.compile(inputTmpl)({
    styles: styles,
    labelName: labelName,
    name: name,
    placeholder: placeholder,
});
