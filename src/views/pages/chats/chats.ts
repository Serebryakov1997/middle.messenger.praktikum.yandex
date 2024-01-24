import './chats.css';
import { AddressPaths, creationChatList } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { ButtonBase, ChatCreationWindow, ClickableText, InputBase, UnderButtonLink } from '../../components';
import { Block, router } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { ChatController } from '../../../controllers/chat-controller';
import { ChatDeleteWindow } from '../../components/chatDeleteWindow';


export class ChatsBase extends Block {
  constructor() {
    super({
      styles: {
        chatsFormClass: 'chats-form',
        chatsSearchBarClass: 'chats-search-bar',
        selectChatLegendClass: 'select-chat-legend',
        messageClass: 'msg-in-chat',
        chatAreaClass: 'chat-area',
        chatAreaNameClass: 'chat-area-name',
        chatLastTimeClass: 'chat-last-time',
        actionWindowClass: 'action-window-class',
        chatDeleteWindowClass: 'delete-window-class',
        chatsListClass: 'chat-list',
        addUserChatWindowClass: 'add-user-chat-window-class'
      },
      chatsForm: 'chats-form-id',
      chatsSearchBar: 'Поиск',
      selectChatLegend: 'Выберите чат, чтобы отправить сообщение',
      selectChatLegendId: 'select-chat-legend-id',
      chatAreaId: 'chat-area-id',
      chatAreaNameId: 'chat-area-name-id',
      chatAreaLastTimeId: 'chat-area-time-id',
      chatCreationWindowClass: 'chat-creation-window',
      chatCreationWindowId: 'chat-creation-window-id'
    });
  }


  protected init(): void {
    this.children = {
      createChatText: new ClickableText({
        clickableText: 'или Создайте чат',
        createChatsClass: 'create-chat-text',
        clickableTextId: 'create-chat-id',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            (<Block>this.children.chatCreationWindow).show();
          }
        }
      }),
      chatCreationWindow: new ChatCreationWindow(
        'Создать чат', 'Имя чата', 'Создать', 'chat-creation-text'),

      linkToProfile: new UnderButtonLink({
        styles: {
          underButtonClass: 'profile-link',
        },
        underButtonText: 'В профиль',
        events: {
          click: () => {
            router.go(AddressPaths.Profile);
          }
        }
      }),

      chatDeleteWindow: new ChatDeleteWindow(),
      addUserToChatWindow: new ChatCreationWindow(
        'Добавить пользователя',
        'Логин',
        'Добавить',
        'add-user-window-label',
        ' add-user-window'
      ),
      addUserText: new ClickableText({
        clickableText: 'Добавить пользователя',
        createChatsClass: 'add-user-text',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            (<Block>this.children.addUserToChatWindow).show();
          }
        }
      }),
      deleteChatText: new ClickableText({
        clickableText: 'Удалить чат',
        createChatsClass: 'delete-chat-text',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            const needChat = document.getElementById('chat-area-name-id');
            const chatName = needChat?.textContent;

            const newProps = { chatTitle: chatName + '?' };
            (<Block>this.children.chatDeleteWindow).setProps(newProps);
            (<Block>this.children.chatDeleteWindow).show();
          }
        }
      }),
      chatInput: new InputBase({
        name: 'message',
        placeholder: 'Сообщение',
        inputType: 'text',
        styles: {
          inputClass: 'chat-input',
        },
      }),
      chatButton: new ButtonBase({
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
    if (this.props.chats) {
      this.children.chatsList = creationChatList(<Record<string, Block>[]>this.props.chats);
    }
    return this.compile(chatsTmpl, this.props);
  }
}


const mapStateToProps = (state: IState) => ({
  chats: state.chats
});

export const Chats = withStore(mapStateToProps)(ChatsBase);
