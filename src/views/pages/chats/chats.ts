import './chats.css';
import { Block, creationChatList } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { mockChatsJSON } from './mockChats';

export class Chats extends Block {
  _formData: FormData;

  constructor() {
    super('form', {
      styles: {
        chatsFormClass: 'chats-form',
        chatsSearchBarClass: 'chats-search-bar',
        selectChatLegendClass: 'select-chat-legend',
        messageClass: 'msg-in-chat',
        chatAreaClass: 'chat-area'
      },
      chatsForm: 'chats-form-id',
      chatsSearchBar: 'Поиск',
      selectChatLegend: 'Выберите чат, чтобы отправить сообщение',
      selectChatLegendId: 'select-chat-legend-id',
    });

    this._formData = new FormData();
  }

  protected init(): void {
    const chatsList = creationChatList(mockChatsJSON, this.children);
    this.children.chatsList = chatsList;
  }

  render(): DocumentFragment {
    return this.compile(chatsTmpl, this.props);
  }
}
