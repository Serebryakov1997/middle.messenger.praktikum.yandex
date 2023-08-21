import './chatButton.css';
import { chatButtonTmpl } from './chatButton.tmpl';
import Handlebars from 'handlebars';


export const styles = {
    chatClass: 'chat-button',
    chatImgClass: 'avatar',
    chatNameClass: 'chat-name',
    chatLastContentClass: 'chat-last-content',
    timeClass: 'time',
    unreadMsgsNumberClass: 'unread-msgs-number'
}

function displayOrHideDiv(elemId: string, display: string): string {
    return `document.getElementById('${elemId}').style.display = '${display}';`
}

function funcShow(): string {
    return `function showOrHideDiv() { ` +
        `${displayOrHideDiv('selection-chat-id', 'block')};` +
        `${displayOrHideDiv('select-default-msg-id', 'none')}` +
        `${displayOrHideDiv('input-chat-msg-id', 'block')}` +
        `${displayOrHideDiv('input-chat-img-id', 'block')}` +
        `${displayOrHideDiv('msg-send-button-id', 'block')} }; showOrHideDiv();`;
}

export const ChatButton = (
    chatName: string,
    chatLastContent: string,
    time: string,
    unreadMsgsNumber: string
) => Handlebars.compile(chatButtonTmpl)({
    styles: styles,
    displayBlock: funcShow(),
    chatName: chatName,
    chatLastContent: chatLastContent,
    time: time,
    unreadMsgsNumberId: 'unread-msgs-number-id',
    unreadMsgsNumber: unreadMsgsNumber
});
