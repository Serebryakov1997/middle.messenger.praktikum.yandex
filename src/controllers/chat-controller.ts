import chatApi from '../api/chat-api';
import { store } from '../core';
import { IAddUserToChat, ICreateChat, IDeleteChat } from '../models/interfaces/chats';
import msgsController from './messages-controller';

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

    static async addUsersToChat(data: IAddUserToChat, addedUserName: string) {
        try {
            const isOk = await chatApi.addUsersToChat(data);
            if (isOk) {
                msgsController.sendMsg(data.chatId, `${addedUserName} присоединился к чату`);
            }
        } catch (err) {
            throw err;
        }
    }

    static async deleteUserFromChat(data: IAddUserToChat, delUserName: string) {
        try {
            const isDelete = await chatApi.deleteUserFromChat(data);
            if (isDelete) {
                msgsController.sendMsg(data.chatId, `Пользователь ${delUserName} удалён из чата`);
            }
        } catch (err) {
            throw err;
        }
    }

    static async requestToConnectToMsgServer(id: number) {
        try {
            const tokenObj = await chatApi.requestToConnectMsgServer(id);
            const token = JSON.parse(String(tokenObj)).token;
            await msgsController.connect(Number(id), token);
        } catch (err) {
            throw err;
        }
    }
}
