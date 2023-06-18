import './button.css';
import { buttonTmpl } from './button.tmpl';
import Handlebars from 'handlebars';


export const Button = (buttonClass, buttonName) => Handlebars.compile(buttonTmpl)({
    buttonClass: buttonClass,
    buttonName: buttonName
});