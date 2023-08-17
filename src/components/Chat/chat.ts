import './chat.css';
import { chatTmpl } from './chat.tmpl';
import Handlebars from 'handlebars';


export const styles = {
    chatClass: 'chat'
}

export const Chat = () => Handlebars.compile(chatTmpl)({
    styles: styles
});
