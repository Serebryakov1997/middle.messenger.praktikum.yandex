import './chats.css';
import { AddressPaths, creationChatList } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { ButtonBase, Chat, ChatCreationWindow, ClickableText, InputBase, UnderButtonLink } from '../../components';
import { Block, router } from '../../../core';
import { ChatController } from '../../../controllers/chat-controller';
import { ChatList, ChatListBase } from '../../components/chatList/chatList';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';


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
        chatsListClass: 'chat-list-class'
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


  // protected init() {
  //   console.log('new ChatList({}): ', new ChatList({}));
  //   this.children = {
  //     createChatText: new ClickableText({
  //       clickableText: 'или Создайте чат',
  //       createChatsClass: 'create-chat-text',
  //       clickableTextId: 'create-chat-id',
  //       events: {
  //         click: (e: Event) => {
  //           e.preventDefault();
  //           (<Block>this.children.chatCreationWindow).show();
  //         }
  //       }
  //     }),
  //     chatCreationWindow: new ChatCreationWindow(),

  //     linkToProfile: new UnderButtonLink({
  //       styles: {
  //         underButtonClass: 'profile-link',
  //       },
  //       underButtonText: 'В профиль',
  //       events: {
  //         click: () => {
  //           router.go(AddressPaths.Profile);
  //         }
  //       }
  //     }),

  //     chatsList: new ChatList({}),
  //     chatInput: new InputBase({
  //       name: 'message',
  //       placeholder: 'Сообщение',
  //       inputType: 'text',
  //       styles: {
  //         inputClass: 'chat-input',
  //       },
  //     }),
  //     chatButton: new ButtonBase({
  //       styles: {
  //         buttonClass: 'button-chat',
  //       },
  //       events: {
  //         click: (e: Event) => {
  //           e.preventDefault();
  //         },
  //       },
  //     }),
  //   };
  // }
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
      chatCreationWindow: new ChatCreationWindow(),

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
