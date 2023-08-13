import './button.css';
import { buttonTmpl } from './button.tmpl';
import Handlebars from 'handlebars';


const styles = {
    authButtonClass: 'main-button',
};


export const Button = (
    buttonClass,
    buttonName,
    changeValue
) => Handlebars.compile(buttonTmpl)({
    styles: styles,
    buttonClass: buttonClass,
    buttonName: buttonName,
    changeValue: changeValue
});
