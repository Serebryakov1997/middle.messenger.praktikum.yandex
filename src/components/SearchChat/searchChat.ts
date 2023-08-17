import './searchChat.css';
import { searchChatTmpl } from './searchChat.tmpl';
import Handlebars from 'handlebars';


const styles = {
    searchChatClass: 'search-chat',
    searchBarClass: 'search-bar',
    profileButtonClass: 'profile-button'
}

export const SearchChat = (

) => Handlebars.compile(searchChatTmpl)({
    styles: styles,
    searchBarPlaceHolder: 'Поиск'
})
