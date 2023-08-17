import './selectChat.css';
import { SearchChat } from '../../components';
import { selectChatTmpl } from './selectChat.tmpl';
import Handlebars from 'handlebars';

export const styles = {
    selectDefaultMsgClass: 'select-default-msg'
}

export const SelectChat = () => Handlebars.compile(selectChatTmpl)({
    styles: styles,
    searchComponent: SearchChat(),
    selectDefaultMsg: 'Выберите чат, чтобы отправить сообщение'
})
