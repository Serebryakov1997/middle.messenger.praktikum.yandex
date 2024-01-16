import { ChatController } from '../controllers/chat-controller';
import { Block } from '../core';
import { withStore } from '../core/Store';
import { IState } from '../models/interfaces/auth';
import { Chat, ChatProps } from '../views/components/chat/chat';

export function creationChatList(): Block[] {
    const chatsList: Block[] = [];

    const styles: ChatProps['styles'] = {
        chatClass: 'chat',
        mockImgClass: 'mock-img',
        chatNameClass: 'name',
        lastPartMsgClass: 'last-part-msg',
        timeOfLastMsgClass: 'time-of-last-msg',

    };

    ChatController.getChats();

    const mapStateToProps = (state: IState) => ({
        chatName: state.chats?.[Number(0)].title,
        lastPartMsg: state.chats?.[Number(0)].last_message?.content,
        numberOfUnreadMsgs: state.chats?.[Number(0)].unread_count,
        timeOfLastMsg: state.chats?.[Number(0)].last_message?.time,
        chatAreaId: state.chats?.[Number(0)].title,
    });

    const WrappedChat = withStore(mapStateToProps)(Chat);

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
