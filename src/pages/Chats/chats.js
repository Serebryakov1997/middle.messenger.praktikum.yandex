import './chats.css';
import { chatsTmpl } from './chats.tmpl';
import Handlebars from 'handlebars';


export const Chats = () => Handlebars.compile(chatsTmpl)({
    containerClass: 'chats-container',
    headerClass: 'chats-header',
    headerName: 'Сайт в разработке...'
});