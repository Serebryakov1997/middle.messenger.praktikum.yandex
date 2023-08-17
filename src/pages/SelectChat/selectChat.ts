import './selectChat.css';
import { Chat, SearchChat } from '../../components';
import { selectChatTmpl } from './selectChat.tmpl';
import Handlebars from 'handlebars';

export const styles = {
    selectDefaultMsgClass: 'select-default-msg',
    chatClass: 'chat-list'
}

export const SelectChat = () => Handlebars.compile(selectChatTmpl)({
    styles: styles,
    searchComponent: SearchChat(),
    selectDefaultMsg: 'Выберите чат, чтобы отправить сообщение',
    chat1: Chat('Андрей', 'Изображение', '10:49'),
    chat2: Chat('Киноклуб', 'Вы: стикер', '12:00'),
    chat3: Chat('Илья', 'Друзья...'),
    chat4: Chat('Иван', ')'),
    chat5: Chat('ДР', '16 мая собираемся...'),
    chat6: Chat('Рома', '('),
    chat7: Chat('Надежда', 'Привет'),
    chat8: Chat('Чат', 'Дорогие друзья!!!...'),
    chat9: Chat('Практикум', ')')
})
