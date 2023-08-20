import './chatButton.css';
import { chatButtonTmpl } from './chatButton.tmpl';
import Handlebars from 'handlebars';


export const styles = {
    chatClass: 'chat-button',
    chatImgClass: 'avatar',
    chatNameClass: 'chat-name',
    chatLastContentClass: 'chat-last-content',
    timeClass: 'time'
}

const displayBlock = `document.getElementById('selection-chat-id').style.display = 'block';`;
const hideText = `document.getElementById('select-default-msg-id').style.display = 'none';`;

export const ChatButton = (
    chatName: string,
    chatLastContent: string,
    time: string
) => Handlebars.compile(chatButtonTmpl)({
    styles: styles,
    chatName: chatName,
    chatLastContent: chatLastContent,
    time: time,
    displayBlock: displayBlock,
    hideText: hideText
});
