import { Block } from '../core';
import { Message } from '../views/components';

export function creationMsgsList(messagesProps: Array<Record<string, unknown>>, currentUserId: number): Block[] {
    const msgsList: Block[] = [];

    Object.values(messagesProps).forEach((messages) => {
        Object.values(messages).forEach((message) => {
            const msgBody = <Record<string, unknown>>message;
            const content = msgBody.content;
            const user_id = msgBody.user_id;
            const chat_id = msgBody.chat_id;

            if (msgBody.type === 'message') {
                let messageClass = 'msg-in-chat';
                if (user_id !== currentUserId) {
                    messageClass += ' other-user-msg';
                }
                const messageComponent = new Message({
                    styles: {
                        messageClass: <string>messageClass
                    },
                    chat_id: <string>chat_id,
                    message: <string>content
                });
                msgsList.push(messageComponent);
            }
        })
    });

    return msgsList;
}
