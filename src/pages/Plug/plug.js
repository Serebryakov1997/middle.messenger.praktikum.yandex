import './plug.css';
import { plugTmpl } from './plug.tmpl';
import Handlebars from 'handlebars';


export const Plug = () => Handlebars.compile(plugTmpl)({
    containerClass: 'plug-container',
    headerClass: 'plug-header',
    headerName: 'Сайт в разработке...'
});