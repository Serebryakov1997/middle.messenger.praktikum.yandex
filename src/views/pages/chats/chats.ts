import './chats.css';
import { Block, creationChatList /* creationMsgsBlocksArr */ } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { mockChatsJSON } from './mockChats';
import { SelectedChatArea } from '../../components';

export class Chats extends Block {
  _formData: FormData;

  constructor() {
    super('form', {
      styles: {
        chatsFormClass: 'chats-form',
        chatsSearchBarClass: 'chats-search-bar',
        selectChatLegendClass: 'select-chat-legend',
        messageClass: 'msg-in-chat',
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
    this.children.selectedChatArea = new SelectedChatArea(
      'header',
      {
        styles: {
          selectedChatNameClass: 'selected-chat-name',
          selectedChatLastTimeClass: 'selected-chat-last-time',
          selectedChatInputClass: 'selected-chat-input',
          selectedChatMsgButtonClass: 'selected-chat-msg-button',
        },
        selectedChatName: '',
        selectedChatLastTime: '',
        selectedChatInputPlchlder: 'Сообщение',
        inputName: 'message',
      },
    );
    // this.children.msgsList = creationMsgsBlocksArr(0);
  }

  render(): DocumentFragment {
    return this.compile(chatsTmpl, this.props);
  }
}
