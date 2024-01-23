import chatApi from '../api/chat-api';
import { store } from '../core';
import { ICreateChat } from '../models/interfaces/chats';
import { creationChatList } from '../utils';

export class ChatController {

    static async getChats() {
        try {
            const chats = await chatApi.getChats();
            let parseChats: Array<Record<string, unknown>> = JSON.parse(String(chats));

            const chatsListOfComponents = creationChatList(parseChats);
            store.set('chats', chatsListOfComponents);
            // console.log('store get chats: ', store.getState().chats)
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
