import chatApi from '../api/chat-api';
import { router } from '../core';
import { ICreateChat } from '../models/interfaces/chats';

export class ChatController {

    static async getChats() {
        try {
            await chatApi.getChats();

            router.go('/chats');
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
