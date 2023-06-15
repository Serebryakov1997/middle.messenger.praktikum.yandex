import { labelTmpl } from './label.tmpl';
import Handlebars from 'handlebars';

export const Label = () => Handlebars.compile(labelTmpl)({
    class: '',
    text: ''
});