import { Block } from '../core';
import { withStore } from '../core/Store';
import { IState } from '../models/interfaces/auth';
import { ChatProps, WrappedChat } from '../views/components/chat/chat';
import { ChatList } from '../views/components/chatList/chatList';

export function creationChatList(): Block[] {
    const chatsList: Block[] = [];

    const styles: ChatProps['styles'] = {
        chatClass: 'chat',
        mockImgClass: 'mock-img',
        chatNameClass: 'name',
        lastPartMsgClass: 'last-part-msg',
        timeOfLastMsgClass: 'time-of-last-msg',

    };


    return [new WrappedChat({
        styles,
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

                // const chatAreaName = document.getElementById('chat-area-name-id');
                // chatAreaName!.textContent = chatName as string;

                // const chatAreaLastTime = document.getElementById('chat-area-time-id');
                // chatAreaLastTime!.textContent = chat.props.timeOfLastMsg as string;
            }
        }
    })];
}
