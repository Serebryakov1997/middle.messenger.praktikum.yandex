import { Block } from '../core';
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
        let unread_count = '0';
        if (value.unread_count) {
            unread_count = String(value.unread_count);
            styles.numberOfUnreadMsgsClass = 'number-of-unread-msgs'
        }

        const title = <string>value.title;
        const avatar = <string>value.avatar;

        let last_message: Record<string, unknown> = {};
        let time = '';
        let content = '';
        if (value.last_message) {
            last_message = <Record<string, unknown>>value.last_message;
            time = (<Record<string, string>>value.last_message).time;
            content = (<Record<string, string>>value.last_message).content;
        }

        const chat = new Chat({
            styles,
            title,
            avatar,
            content,
            unread_count,
            time,
            events: {
                click: () => {
                    const selectChatLegentEl = document.getElementById('select-chat-legend-id');
                    if (selectChatLegentEl) {
                        selectChatLegentEl.style.display = 'none';
                    }

                    const chatArea = document.getElementById('chat-area-id');
                    chatArea!.style.display = 'block';

                    const createChatText = document.getElementById('create-chat-id');
                    createChatText!.style.display = 'none';

                    const chatAreaName = document.getElementById('chat-area-name-id');
                    chatAreaName!.textContent = title;

                    const chatAreaLastTime = document.getElementById('chat-area-time-id');
                    chatAreaLastTime!.textContent = time;
                }
            }
        });
        chatsList.push(chat);
    });
    console.log('chatsList: ', chatsList);
    return chatsList;
}
