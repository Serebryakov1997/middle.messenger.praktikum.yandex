import './chats.css';
import { AddressPaths, creationChatList } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { ChatCreationWindow, ClickableText, UnderButtonLink } from '../../components';
import { Block, router } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { SelectedChatAreaBase } from '../../components/selectedChatArea/selectedChatArea';
import { LegendText } from '../../components/legend';

export class ChatsBase extends Block {
  _formData: FormData;

  constructor() {
    super({
      styles: {
        chatsFormClass: 'chats-form',
        chatsSearchBarClass: 'chats-search-bar',
        messageClass: 'msg-in-chat',
        actionWindowClass: 'action-window-class',
        chatDeleteWindowClass: 'delete-window-class',
        chatsListClass: 'chat-list',
        addUserChatWindowClass: 'add-user-chat-window-class',
        displayClass: 'display-area',
        chatButtonClass: 'chat-button',
      },
      chatsForm: 'chats-form-id',
      chatsSearchBar: 'Поиск',
      chatCreationWindowClass: 'chat-creation-window',
      chatCreationWindowId: 'chat-creation-window-id',
    });
    this._formData = new FormData();
  }

  protected init(): void {
    this.children = {
      selectChatLegendText: new LegendText(),
      createChatText: new ClickableText({
        clickableText: 'или Создайте чат',
        createChatsClass: 'create-chat-text',
        clickableTextId: 'create-chat-id',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            (<Block> this.children.chatCreationWindow).show();
          },
        },
      }),
      chatCreationWindow: new ChatCreationWindow({
        styles: {
          chatCreationWindowClass: 'chat-creation-general',
        },
        windowTitle: 'Создать чат',
        labelName: 'Имя чата',
        buttonName: 'Создать',
        buttonClass: 'button-creation-chat',
        windowTitleClass: 'chat-creation-text',
        addUserWindowClass: '',
        chatCreationTextClass: 'chat-creation-text',
        buttonNameClass: 'button-creation-name',
      }),

      linkToProfile: new UnderButtonLink({
        styles: {
          underButtonClass: 'profile-link',
        },
        underButtonText: 'В профиль',
        events: {
          click: () => {
            router.go(AddressPaths.Profile);
          },
        },
      }),
    };
  }

  render(): DocumentFragment {
    if (this.props.chats) {
      this.children.chatsList = creationChatList(<Record<string, Block>[]> this.props.chats);
    }

    if (this.props.selectedChat) {
      (<Block> this.children.selectChatLegendText).hide();
      (<Block> this.children.createChatText).hide();

      const { messages, currentUserId, selectedChat } = this.props;

      const selChat = JSON.parse(JSON.stringify(selectedChat));
      const { chatId, title, time } = selChat;

      if (messages && currentUserId) {
        const selectedChatArea = new SelectedChatAreaBase();
        (<Block>selectedChatArea).setProps({
          messages, currentUserId, chatId, title, time,
        });
        this.children.selectedChatArea = selectedChatArea;
        (<Block> this.children.selectedChatArea).show();
      }
    }
    return this.compile(chatsTmpl, this.props);
  }
}

const mapStateToProps = (state: IState) => ({
  chats: state.chats,
  selectedChat: state.selectedChat,
  messages: state.messages,
  currentUserId: state.user?.id,
});

export const Chats = withStore(mapStateToProps)(ChatsBase);
