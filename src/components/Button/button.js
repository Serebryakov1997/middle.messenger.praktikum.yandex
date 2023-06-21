import './button.css';
import { buttonTmpl } from './button.tmpl';
import Handlebars from 'handlebars';


export const Button = (
    buttonClass,
    buttonLink,
    buttonName,
    changeValue
) => Handlebars.compile(buttonTmpl)({
    buttonClass: buttonClass,
    buttonLink: buttonLink,
    buttonName: buttonName,
    changeValue: changeValue
});