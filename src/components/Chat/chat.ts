import './chat.css';
import { chatTmpl } from './chat.tmpl';
import Handlebars from 'handlebars';


export const styles = {
    chatClass: 'chat',
    chatImgClass: 'avatar',
    chatNameClass: 'chat-name',
    chatLastContentClass: 'chat-last-content',
    timeClass: 'time'
}

export const Chat = (
    chatName: string,
    chatLastContent: string,
    time: string
) => Handlebars.compile(chatTmpl)({
    styles: styles,
    chatName: chatName,
    chatLastContent: chatLastContent,
    time: time
});
