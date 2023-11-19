import chatApi from '../api/chat-api';
import { router } from '../core';

export class ChatController {

    static async getChats() {
        try {
            await chatApi.getChats();

            router.go('/chats');
        } catch (err) {
            throw err;
        }
    }
}
