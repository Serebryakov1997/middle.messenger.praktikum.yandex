import { ChatController } from '../controllers/chat-controller';
import { Block, store } from '../core';
import { Chat, ChatProps } from '../views/components/chat/chat';

export function creationChatList(chatsResponse: Array<Record<string, unknown>>): Block[] {
    const chatsList: Block[] = [];


    const styles: ChatProps['styles'] = {
        chatClass: 'chat',
        mockImgClass: 'mock-img',
        chatNameClass: 'name',
        lastPartMsgClass: 'last-part-msg',
        timeOfLastMsgClass: 'time-of-last-msg',
        numberOfUnreadMsgsClass: ''
    };


    Object.values(chatsResponse).forEach((value) => {
        let unread_count = '';
        if (value.unread_count) {
            unread_count = String(value.unread_count);
            styles.numberOfUnreadMsgsClass = 'number-of-unread-msgs'
        }

        const chatId = String(value.id);
        const title = <string>value.title;
        const avatar = <string>value.avatar;

        ChatController.requestToConnectToMsgServer(Number(chatId));

        let last_message: Record<string, unknown> = {};
        let time = '';
        let content = '';
        if (value.last_message) {
            last_message = <Record<string, unknown>>value.last_message;
            time = (<Record<string, string>>value.last_message)
                .time.substring(0, 19).replace('T', ' ');
            content = (<Record<string, string>>value.last_message).content;
        }

        const chat = new Chat({
            styles,
            chatId,
            title,
            avatar,
            content,
            unread_count,
            time,
            events: {
                click: () => {
                    const chatData = {
                        chatId,
                        title,
                        time
                    }
                    store.set('selectedChat', chatData);
                }
            }
        });
        chatsList.push(chat);
    });
    return chatsList;
}
