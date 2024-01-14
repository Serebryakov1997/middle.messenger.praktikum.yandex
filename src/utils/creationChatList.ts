import { ChatController } from '../controllers/chat-controller';
import { Block, store } from '../core';
import { Chat, ChatProps } from '../views/components/chat/chat';

export function creationChatList(): Block[] {
    const chatsList: Block[] = [];

    const styles: ChatProps['styles'] = {
        chatClass: 'chat',
        mockImgClass: 'mock-img',
        chatNameClass: 'name',
        lastPartMsgClass: 'last-part-msg',
        timeOfLastMsgClass: 'time-of-last-msg'
    };

    // console.log('store.getState().chats: ', store.getState().chats);

    ChatController.getChats()
        .then((res: Record<string, unknown>[]) => {
            console.log('res: ', res);
            Object.keys(res).forEach((key) => {
                // console.log('value: ', value);
                const value = res[Number(key)];
                const numberOfUnreadMsgs = value.unread_count;
                if (numberOfUnreadMsgs !== 0) {
                    styles.numberOfUnreadMsgsClass = 'number-of-unread-msgs';
                } else {
                    styles.numberOfUnreadMsgsClass = '';
                }

                const chatName = <string>value.title;

                let lastPartMsg: string = '';
                let timeOfLastMsg: string = '';
                if (value.last_message) {
                    lastPartMsg = (<Record<string, string>>value.last_message).content;
                    timeOfLastMsg = (<Record<string, string>>value.last_message).time;
                    if (lastPartMsg.length >= 30) {
                        lastPartMsg = lastPartMsg.slice(0, 30);
                    }
                }

                const chat = new Chat({
                    styles,
                    chatName,
                    lastPartMsg,
                    numberOfUnreadMsgs: String(numberOfUnreadMsgs),
                    timeOfLastMsg,
                    chatAreaId: chatName,
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
                            chatAreaName!.textContent = chatName;

                            const chatAreaLastTime = document.getElementById('chat-area-time-id');
                            chatAreaLastTime!.textContent = timeOfLastMsg;
                        }
                    }
                });
                chatsList.push(chat);
            });
        });
    // console.log('chatsList: ', chatsList);
    return chatsList;
}
