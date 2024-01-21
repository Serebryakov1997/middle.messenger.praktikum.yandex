import chatApi from '../api/chat-api';
import { store } from '../core';
import { ICreateChat } from '../models/interfaces/chats';

export class ChatController {

    static async getChats() {
        try {
            const chats = await chatApi.getChats();
            let parseChats: Array<Record<string, unknown>> = JSON.parse(String(chats));
            const styles = {
                chatClass: 'chat',
                mockImgClass: 'mock-img',
                chatNameClass: 'name',
                lastPartMsgClass: 'last-part-msg',
                timeOfLastMsgClass: 'time-of-last-msg',
                numberOfUnreadMsgsClass: 'number-of-unread-msgs'
            };
            Object.values(parseChats).forEach((value) => {
                value.styles = styles;

                value.events = {
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
                        chatAreaName!.textContent = value.title as string;

                        // const chatAreaLastTime = document.getElementById('chat-area-time-id');
                        // chatAreaLastTime!.textContent = chat.props.timeOfLastMsg as string;
                    }
                }
            });
            store.set('chats', parseChats);
        } catch (err) {
            throw err;
        }
    }

    static async createChat(data: ICreateChat) {
        try {
            await chatApi.createChat(data);
        } catch (err) {
            throw err;
        }
    }
}
