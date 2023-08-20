import { chatMessageTmpl } from './chatMessage.tmpl';
import './message.css';
import Handlebars from 'handlebars';


const styles = {
    messageClass: 'chat-message'
}


export const ChatMessage = () => Handlebars.compile(chatMessageTmpl)({
    styles: styles
});
