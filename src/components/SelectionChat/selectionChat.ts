import './selectionChat.css';
import { selectionChatTmpl } from './selectionChat.tmpl';
import Handlebars from 'handlebars';

const styles = {
    selectionChatClass: 'selection-chat',
    selectionChatNameClass: 'selection-chat-name',
    selectionChatTimeClass: 'selection-chat-time',
    dotOptionsButtonClass: 'dot-options-button',
    dotOptionsClass: 'dot-options',
    dotOptionsHeightClass: 'dot-options-height',
    dotOptionsButtonHeightClass: 'dot-options-button-height',
    imgSearchClass: 'img-search'
}

export const SelectionChat = (
    selectionChatName: string,
    selectionChatTime: string
) => Handlebars.compile(selectionChatTmpl)({
    styles: styles,
    selectionChatName: selectionChatName,
    selectionChatTime: selectionChatTime
});
