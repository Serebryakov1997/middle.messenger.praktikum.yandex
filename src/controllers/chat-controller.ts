import chatApi from '../api/chat-api';
import { store } from '../core';
import { ICreateChat } from '../models/interfaces/chats';

export class ChatController {

    static async getChats() {
        try {
            const chats = await chatApi.getChats();
            let parseChats = JSON.parse(String(chats));
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
