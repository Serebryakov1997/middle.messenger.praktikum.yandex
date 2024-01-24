import chatApi from '../api/chat-api';
import { store } from '../core';
import { IAddUserToChat, ICreateChat, IDeleteChat } from '../models/interfaces/chats';

export class ChatController {

    static async getChats() {
        try {
            const chats = await chatApi.getChats();
            let parseChats: Array<Record<string, unknown>> = JSON.parse(String(chats));
            store.set('chats', parseChats);
        } catch (err) {
            throw err;
        }
    }

    static async createChat(data: ICreateChat) {
        try {
            await chatApi.createChat(data);
            this.getChats();
        } catch (err) {
            throw err;
        }
    }

    static async deleteChat(data: IDeleteChat) {
        try {
            await chatApi.deleteChat(data);
            this.getChats();
        } catch (err) {
            throw err;
        }
    }

    static async addUsersToChat(data: IAddUserToChat) {
        try {
            await chatApi.addUsersToChat(data);
        } catch (err) {
            throw err;
        }
    }

    static async requestToConnectToMsgServer(id: string) {
        try {
            await chatApi.requestToConnectMsgServer(id);
        } catch (err) {
            throw err;
        }
    }
}
