import { Chat } from '../views/components';
import { ChatProps } from '../views/components/chat/chat';
import { IMockChatsJSON } from '../views/pages/chats/mockChats';
import { Block } from './block';

export function creationChatList(
    mockJSONData: IMockChatsJSON,
    children: Record<string, Block>
): Block[] {

    let chatsList: Block[] = [];
    let styles: ChatProps['styles'] = {
        chatClass: 'chat',
        mockImgClass: 'mock-img',
        chatNameClass: 'name',
        lastPartMsgClass: 'last-part-msg',
        timeOfLastMsgClass: 'time-of-last-msg',
    };

    Object.keys(mockJSONData).forEach(key => {

        Object.hasOwn(mockJSONData[Number(key)], 'numberOfUnreadMsgs') ?
            styles.numberOfUnreadMsgsClass = 'number-of-unread-msgs' :
            styles.numberOfUnreadMsgsClass = '';

        const chatName = mockJSONData[Number(key)].chatName;
        const lastPartMsg = mockJSONData[Number(key)].lastPartMsg;
        const numberOfUnreadMsgs = mockJSONData[Number(key)].numberOfUnreadMsgs;
        const timeOfLastMsg = mockJSONData[Number(key)].timeOfLastMsg;

        let selectedChatLastTime = '';
        Object.hasOwn(mockJSONData[Number(key)], 'selectedChatLastTime') ?
            selectedChatLastTime = mockJSONData[Number(key)].selectedChatLastTime! :
            selectedChatLastTime;

        const chat = new Chat({
            styles,
            chatName,
            lastPartMsg,
            numberOfUnreadMsgs,
            timeOfLastMsg,
            events: {
                click: (e: Event) => {
                    const selectChatLegentEl = document.getElementById('select-chat-legend-id');
                    if (selectChatLegentEl) {
                        selectChatLegentEl.style.display = 'none';
                    }
                    const msgs = mockJSONData[Number(key)].msgs;
                    console.log('msgs: ', msgs);
                    children.selectedChatArea.setProps({
                        selectedChatName: chatName,
                        selectedChatLastTime: selectedChatLastTime,
                        msgs: msgs
                    });
                    children.selectedChatArea.show();
                }
            }
        });
        chatsList.push(chat);
    });
    return chatsList;
}
