import './chats.css';
import { AddressPaths, clickValidation, creationChatList, getChatId, inputValidation } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { ButtonBase, ChatCreationWindow, ClickableText, InputBase, UnderButtonLink, ValidError } from '../../components';
import { Block, router } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { ChatController } from '../../../controllers/chat-controller';
import { ChatDeleteWindow } from '../../components/chatDeleteWindow';
import { emptyValidator } from '../../../models/validators';
import msgsController from '../../../controllers/messages-controller';
import { creationMsgsList } from '../../../utils/creationMsgsList';


export class ChatsBase extends Block {
  _formData: FormData;
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
        addUserChatWindowClass: 'add-user-chat-window-class',
        msgListClass: 'msgs-list',
        valieErrMsgClass: 'valid-err-msg',
        displayClass: 'display-area',
        chatButtonClass: 'chat-button'
      },
      chatsForm: 'chats-form-id',
      chatsSearchBar: 'Поиск',
      selectChatLegend: 'Выберите чат, чтобы отправить сообщение',
      selectChatLegendId: 'select-chat-legend-id',
      chatAreaId: 'chat-area-id',
      chatAreaNameId: 'chat-area-name-id',
      chatAreaLastTimeId: 'chat-area-time-id',
      chatCreationWindowClass: 'chat-creation-window',
      chatCreationWindowId: 'chat-creation-window-id',
      onsubmit: 'return false'
    });
    this._formData = new FormData();
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
      //, 'chat-creation-text'
      chatCreationWindow: new ChatCreationWindow({
        windowTitle: 'Создать чат',
        labelName: 'Имя чата',
        buttonName: 'Создать',
        buttonClass: 'button-creation-chat',
        windowTitleClass: 'chat-creation-text',
        addUserWindowClass: '',
        chatCreationTextClass: 'chat-creation-text',
        buttonNameClass: 'button-creation-name'
      }),

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
      addUserToChatWindow: new ChatCreationWindow({
        windowTitle: 'Добавить пользователя',
        labelName: 'Логин',
        buttonName: 'Добавить',
        buttonClass: 'button-creation-chat',
        windowTitleClass: 'chat-creation-text',
        addUserWindowClass: ' add-user-window',
        chatCreationTextClass: 'add-user-window-label',
        buttonNameClass: 'button-creation-name',
        otherClass: 'other-class'
      }),
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
        events: {
          blur: (e: Event) => {
            const message = (<HTMLInputElement>e.target).value;
            this._formData.set('message', message);

            inputValidation(e, emptyValidator,
              {
                validError: <Block>this.children.validErrorMsg,
                input: <Block>this.children.chatInput,
                button: <Block>this.children.chatButton
              });
          }
        }
      }),
      validErrorMsg: new ValidError({
        styles: {
          validErrClass: 'valid-err-message',
        },
        validErrorId: 'error'
      }),
      chatButton: new ButtonBase({
        styles: {
          buttonClass: 'button-chat',
        },
        buttonType: 'submit',
        events: {
          click: (e: Event) => {
            // e.preventDefault();
            const chatArea = document.getElementById('chat-area-id');
            chatArea!.style.display = 'block';
            this.sendMsg(e, this._formData);
          },
        },
      }),
    };
  }

  sendMsg(event: Event, formData: FormData) {
    let message = <string>formData.get('message');
    const isValid = clickValidation(
      { message },
      { message: emptyValidator },
      {
        message: {
          validError: <Block>this.children.validErrorMsg,
          input: <Block>this.children.chatInput,
          button: <Block>this.children.chatButton
        }
      },
      event
    );
    if (isValid) {
      const chatId = getChatId();
      msgsController.sendMsg(chatId, message);
    }
  }


  render(): DocumentFragment {
    if (this.props.chats) {
      this.children.chatsList = creationChatList(<Record<string, Block>[]>this.props.chats);
    }
    if (this.props.messages) {
      this.children.msgsList = creationMsgsList(<Record<string, Block>[]>this.props.messages,
        Number(this.props.currentUserId));
    }
    return this.compile(chatsTmpl, this.props);
  }
}


const mapStateToProps = (state: IState) => ({
  currentUserId: state.user?.id,
  chats: state.chats,
  messages: state.messages
});

export const Chats = withStore(mapStateToProps)(ChatsBase);
