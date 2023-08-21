import './messageInput.css';
import { messageInputTmpl } from './messageInput.tmpl';
import Handlebars from 'handlebars';

const styles = {
    msgInputClass: 'msg-input-class',
    imgClipClass: 'img-clip-class',
    msgSendButtonClass: 'msg-send-button'
}

export const MessageInput = () => Handlebars.compile(messageInputTmpl)({
    styles: styles,
    inputChatMsgId: 'input-chat-msg-id',
    inputChatImgId: 'input-chat-img-id',
    msgSendButtonId: 'msg-send-button-id',
    msgInputPlaceholder: 'Сообщение'
});
