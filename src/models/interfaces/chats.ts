import { IUser } from './auth';

export interface IChat {
    [key: string]: {
        numericChat: string;
        id: number;
        title: string;
        avatar: string;
        unread_count: number;
        created_by: number;
        last_message: {
            user: IUser;
            time: string;
            content: string;
        },
    }
}

export interface ICreateChat {
    [key: string]: string;
    title: string;
}
