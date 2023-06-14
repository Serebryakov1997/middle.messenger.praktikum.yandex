import './main.css';
import { mainTmpl } from './main.tmpl';
import Handlebars from 'handlebars';

export const Main = () => Handlebars.compile(mainTmpl)({ name: 'Hello Main!' });
