import './button.css';
import { buttonTmpl } from './button.tmpl';
import Handlebars from 'handlebars';


const styles = {
    authButtonClass: 'main-button',
};


export const Button = (
    buttonClass: string,
    buttonName: string
) => Handlebars.compile(buttonTmpl)({
    styles: styles,
    buttonClass: buttonClass,
    buttonName: buttonName
});
