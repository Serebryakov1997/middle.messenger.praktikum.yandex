import { Block } from '../core';
import { Message } from '../views/components';

export function creationMsgsList(messagesProps: Array<Record<string, unknown>>): Block[] {
    const msgsList: Block[] = [];

    Object.values(messagesProps).forEach((messages) => {
        Object.values(messages).forEach((message) => {
            const msgBody = <Record<string, unknown>>message;
            const content = msgBody.content;

            if (msgBody.type === 'message') {
                const messageComponent = new Message({
                    styles: {
                        messageClass: 'msg-in-chat'
                    },
                    message: <string>content
                });
                msgsList.push(messageComponent);
            }
        })
    });

    return msgsList;
}
