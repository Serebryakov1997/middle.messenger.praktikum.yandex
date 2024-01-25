import { IChat } from '../models/interfaces';
import { IAddUserToChat, ICreateChat, IDeleteChat } from '../models/interfaces/chats';
import { API } from './api';

class ChatAPI extends API {
    constructor() {
        super('/chats');
    }

    async getChats() {
        return this.http.get<IChat[]>('/');
    }

    async createChat(data: ICreateChat) {
        return this.http.post('', { data });
    }

    async deleteChat(data: IDeleteChat) {
        return this.http.delete('', { data });
    }

    async addUsersToChat(data: IAddUserToChat) {
        return this.http.put('/users', { data });
    }

    async deleteUserFromChat(data: IAddUserToChat) {
        return this.http.delete('/users', { data });
    }

    async requestToConnectMsgServer(id: number) {
        return this.http.post(`/token/${id}`);
    }
}

export default new ChatAPI();
