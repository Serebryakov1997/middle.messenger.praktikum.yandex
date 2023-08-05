import './pageError.css';
import { pageErrorTmpl } from './pageError.tmpl';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';

const styles = {
    pageErrorClass: 'page-error',
    codeErrorClass: 'code-error',
    codeErrorTextClass: 'code-error-text',
    linkToChatsClass: 'link-to-chats'
}

export const PageError = (code, errorText) => Handlebars.compile(pageErrorTmpl)({
    styles: styles,
    codeError: code,
    codeErrorText: errorText,
    linkToChats: DEV_LINK_ADDRESS + 'chats',
    linkToChatsName: 'Назад к чатам'
});
