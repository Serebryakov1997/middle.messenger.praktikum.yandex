import { IChat } from '../models/interfaces';
import { API } from './api';

class ChatAPI extends API {
    constructor() {
        super('/chats');
    }

    async getChats() {
        return this.http.get<IChat[]>('/');
    }
}

export default new ChatAPI();
