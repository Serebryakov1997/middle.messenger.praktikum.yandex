import { Block } from '../core';
import { IMessage } from '../models/interfaces/messages';
import { Message } from '../views/components';

export function creationMsgsList(
  messagesProps: Array<Record<string, unknown>> | IMessage[],
  currentUserId: number,
  selectedChatId: number,
): Block[] {
  const msgsList: Block[] = [];

  console.log('messagesProps: ', messagesProps);

  // Object.values(messagesProps).forEach((messages) => {
  Object.values(messagesProps).forEach((message) => {
    const msgBody = <Record<string, unknown>>message;
    const { content } = msgBody;
    const { user_id } = msgBody;
    const { chat_id } = msgBody;

    if (msgBody.type === 'message') {
      let messageClass = 'msg-in-chat';
      if (user_id !== currentUserId) {
        messageClass += ' other-user-msg';
      }
      if (selectedChatId === Number(chat_id)) {
        const messageComponent = new Message({
          styles: {
            messageClass: <string>messageClass,
            textPositionClass: 'text-in-block',
          },
          msgId: <string>msgBody.id,
          message: <string>content,
        });
        msgsList.push(messageComponent);
      }
    }
  });
  // });

  return msgsList;
}
