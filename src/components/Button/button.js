import './button.css';
import { buttonTmpl } from './button.tmpl';
import Handlebars from 'handlebars';


const styles = {
    authButtonClass: 'main-button',
};


export const Button = (
    buttonClass,
    // buttonLink,
    buttonName,
    changeValue
) => Handlebars.compile(buttonTmpl)({
    styles: styles,
    buttonClass: buttonClass,
    // buttonLink: buttonLink,
    buttonName: buttonName,
    changeValue: changeValue
});
