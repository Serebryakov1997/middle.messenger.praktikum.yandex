import './chats.css';
import { creationChatList } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { mockChatsJSON } from './mockChats';
import { Button, Input, UnderButtonLink } from '../../components';
import { Block, router } from '../../../core';

export class Chats extends Block {
  constructor() {
    super('form', {
      styles: {
        chatsFormClass: 'chats-form',
        chatsSearchBarClass: 'chats-search-bar',
        selectChatLegendClass: 'select-chat-legend',
        messageClass: 'msg-in-chat',
        chatAreaClass: 'chat-area',
        chatAreaNameClass: 'chat-area-name',
        chatLastTimeClass: 'chat-last-time',
      },
      chatsForm: 'chats-form-id',
      chatsSearchBar: 'Поиск',
      selectChatLegend: 'Выберите чат, чтобы отправить сообщение',
      selectChatLegendId: 'select-chat-legend-id',
      chatAreaId: 'chat-area-id',
      chatAreaNameId: 'chat-area-name-id',
      chatAreaLastTimeId: 'chat-area-time-id',
    });
  }

  protected init(): void {
    const chatsList = creationChatList(mockChatsJSON);
    this.children = {
      linkToProfile: new UnderButtonLink('a', {
        styles: {
          underButtonClass: 'profile-link',
        },
        underButtonText: 'В профиль',
        events: {
          click: () => {
            router.go('/settings');
          }
        }
      }),
      chatsList,
      chatInput: new Input({
        name: 'message',
        placeholder: 'Сообщение',
        inputType: 'text',
        styles: {
          inputClass: 'chat-input',
        },
      }),
      chatButton: new Button({
        styles: {
          buttonClass: 'button-chat',
        },
        events: {
          click: (e: Event) => {
            e.preventDefault();
          },
        },
      }),
    };
  }

  render(): DocumentFragment {
    return this.compile(chatsTmpl, this.props);
  }
}
