import { IChat } from '../models/interfaces';
import { ICreateChat } from '../models/interfaces/chats';
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
}

export default new ChatAPI();
