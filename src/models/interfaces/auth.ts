import { IChat } from './chats';

export interface ISigninData {
    [key: string]: string;

    login: string;
    password: string;
}

export interface ISignUpData {
    [key: string]: string;

    email: string;
    login: string;
    first_name: string;
    second_name: string;
    phone: string;
    password: string;
    repeat_password: string;
}

export interface IUser {
    [key: string]: string | number;
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    phone: string;
    login: string;
    avatar: string;
    email: string;
}

export interface IState {
    user?: IUser;
    chats?: IChat;
    image?: string;
}

export interface IInput {
    name?: string;
    inputValue?: string;
}
