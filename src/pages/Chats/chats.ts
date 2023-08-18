import './chats.css';
import { ChatButton, SearchChat, SelectionChat } from '../../components';
import { chatsTmpl } from './chats.tmpl';
import Handlebars from 'handlebars';

export const styles = {
    formChatsClass: 'form-chats',
    selectDefaultMsgClass: 'select-default-msg',
    chatClass: 'chat-list'
}

export const Chats = () => Handlebars.compile(chatsTmpl)({
    styles: styles,
    searchComponent: SearchChat(),
    selectDefaultMsg: 'Выберите чат, чтобы отправить сообщение',
    chatButton1: ChatButton('Андрей', 'Изображение', '10:49'),
    chatButton2: ChatButton('Киноклуб', 'Вы: стикер', '12:00'),
    chatButton3: ChatButton('Илья', 'Друзья...', '15:12'),
    chatButton4: ChatButton('Иван', 'Иван присоединился к чату', 'Пт'),
    chatButton5: ChatButton('ДР', '16 мая собираемся...', 'Ср'),
    chatButton6: ChatButton('Рома', '(', 'Пт'),
    chatButton7: ChatButton('Надежда', 'Привет', 'Пн'),
    chatButton8: ChatButton('Чат', 'Дорогие друзья!!!...', 'Вт'),
    chatButton9: ChatButton('Практикум', ')', 'Пт'),
    selectionChat4: SelectionChat('Иван', 'Был вчера в 16:54'),
})
