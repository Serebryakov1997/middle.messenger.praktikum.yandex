import './selectedChatArea.css';
import msgsController from '../../../controllers/messages-controller';
import { Block } from '../../../core';
import { emptyValidator } from '../../../models/validators';
import { clickValidation, inputValidation } from '../../../utils';
import { creationMsgsList } from '../../../utils/creationMsgsList';
import { ButtonBase } from '../button';
import { ClickableText } from '../clickableText';
import { InputBase } from '../input';
import { ValidError } from '../validError';
import { selectedChatAreaTmpl } from './selectedChatArea.tmpl';
import { ChatDeleteWindow } from '../chatDeleteWindow';
import { ChatCreationWindow } from '../chatCreationWindow';

export class SelectedChatAreaBase extends Block {
  _formData: FormData;

  constructor() {
    super({
      styles: {
        chatAreaClass: 'chat-area',
        chatAreaNameClass: 'chat-area-name',
        chatLastTimeClass: 'chat-last-time',
        msgListClass: 'msgs-list',
        validErrMsgClass: 'valid-err-msg',
      },
      chatAreaId: 'chat-area-id',
      chatAreaNameId: 'chat-area-name-id',
      chatAreaLastTimeId: 'chat-area-time-id',
    });
    this._formData = new FormData();
  }

  protected init(): void {
    this.children = {
      addUserText: new ClickableText({
        clickableText: 'Добавить пользователя',
        createChatsClass: 'add-user-text',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            (<Block> this.children.addUserToChatWindow).show();
          },
        },
      }),
      deleteUserText: new ClickableText({
        clickableText: 'Удалить пользователя',
        createChatsClass: 'delete-user-text',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            (<Block> this.children.deleteUserFromChatWindow).show();
          },
        },
      }),
      deleteChatText: new ClickableText({
        clickableText: 'Удалить чат',
        createChatsClass: 'delete-chat-text',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            const { title } = this.props;

            if (title) {
              const newProps = { chatTitle: `${title}?` };
              (<Block> this.children.chatDeleteWindow).setProps(newProps);
              (<Block> this.children.chatDeleteWindow).show();
            }
          },
        },
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
        otherClass: 'other-class',
      }),
      deleteUserFromChatWindow: new ChatCreationWindow({
        windowTitle: 'Удалить пользователя',
        labelName: 'Логин',
        buttonName: 'Удалить',
        buttonClass: 'button-creation-chat',
        windowTitleClass: 'chat-creation-text',
        addUserWindowClass: ' add-user-window',
        chatCreationTextClass: 'add-user-window-label',
        buttonNameClass: 'button-creation-name',
        otherClass: 'other-class',
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

            inputValidation(
              e,
              emptyValidator,
              {
                validError: <Block> this.children.validErrorMsg,
                input: <Block> this.children.chatInput,
                button: <Block> this.children.chatButton,
              },
            );
          },
        },
      }),
      validErrorMsg: new ValidError({
        styles: {
          validErrClass: 'valid-err-message',
        },
        validErrorId: 'error',
      }),
      chatButton: new ButtonBase({
        styles: {
          buttonClass: 'button-chat',
        },
        buttonType: 'submit',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            this.sendMsg(e, this._formData);
          },
        },
      }),
    };
  }

  sendMsg(event: Event, formData: FormData) {
    const message = <string>formData.get('message');
    const isValid = clickValidation(
      { message },
      { message: emptyValidator },
      {
        message: {
          validError: <Block> this.children.validErrorMsg,
          input: <Block> this.children.chatInput,
          button: <Block> this.children.chatButton,
        },
      },
      event,
    );
    if (isValid) {
      const { chatId } = this.props;
      msgsController.sendMsg(Number(chatId), message);
    }
  }

  render(): DocumentFragment {
    if (this.props.messages) {
      const { chatId } = this.props;
      this.children.msgsList = creationMsgsList(
<Record<string, Block>[]> this.props.messages,
Number(this.props.currentUserId),
Number(chatId),
      );
    }
    return this.compile(selectedChatAreaTmpl, this.props);
  }
}
