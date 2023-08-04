import './notFound.css';
import { notFoundTmpl } from './notFound.tmpl';
import { DEV_LINK_ADDRESS } from '../../utils';
import Handlebars from 'handlebars';

const styles = {
    notFoundClass: 'not-found',
    codeErrorClass: 'code-error',
    codeErrorTextClass: 'code-error-text',
    linkToChatsClass: 'link-to-chats'
}

export const NotFound = () => Handlebars.compile(notFoundTmpl)({
    styles: styles,
    codeError: '404',
    codeErrorText: 'Не туда попали',
    linkToChats: DEV_LINK_ADDRESS + 'chats',
    linkToChatsName: 'Назад к чатам'
})