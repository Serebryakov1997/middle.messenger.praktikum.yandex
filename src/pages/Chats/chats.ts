import './chats.css';
import { ChatButton, SearchChat } from '../../components';
import { selectChatTmpl } from './chats.tmpl';
import Handlebars from 'handlebars';

export const styles = {
    selectDefaultMsgClass: 'select-default-msg',
    chatClass: 'chat-list'
}

export const Chats = () => Handlebars.compile(selectChatTmpl)({
    styles: styles,
    searchComponent: SearchChat(),
    selectDefaultMsg: 'Выберите чат, чтобы отправить сообщение',
    chat1: ChatButton('Андрей', 'Изображение', '10:49'),
    chat2: ChatButton('Киноклуб', 'Вы: стикер', '12:00'),
    chat3: ChatButton('Илья', 'Друзья...', '15:12'),
    chat4: ChatButton('Иван', ')', 'Пт'),
    chat5: ChatButton('ДР', '16 мая собираемся...', 'Ср'),
    chat6: ChatButton('Рома', '(', 'Пт'),
    chat7: ChatButton('Надежда', 'Привет', 'Пн'),
    chat8: ChatButton('Чат', 'Дорогие друзья!!!...', 'Вт'),
    chat9: ChatButton('Практикум', ')', 'Пт')
})
