import { Chat } from '../views/components';
import { IMockChatsJSON } from '../views/pages/chats/mockChats';
import { Block } from './block';

export function creationChatList(
    mockJSONData: IMockChatsJSON,
): Block[] {

    let chatsList: Block[] = [];
    Object.keys(mockJSONData).forEach(key => {
        const chat = new Chat({
            styles: {
                chatClass: 'chat',
                mockImgClass: 'mock-img',
                chatNameClass: 'name'
            },
            chatName: mockJSONData[Number(key)].chatName
        });
        console.log('chat: ', chat);
        chat.getContent().style.top += '50px';
        chatsList.push(chat);
    });
    console.log('chatsLst: \n', chatsList)
    console.log('chat 0: ', chatsList[0]);
    return chatsList;
}
