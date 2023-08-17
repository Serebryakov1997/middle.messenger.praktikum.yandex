import './selectionChat.css';
import { selectionChatTmpl } from './selectionChat.tmpl';
import Handlebars from 'handlebars';

const styles = {
    selectionChatClass: 'selection-chat'
}

export const SelectionChat = () => Handlebars.compile(selectionChatTmpl)({
    styles: styles,
});
