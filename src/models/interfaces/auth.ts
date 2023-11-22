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
// "{
//     "id":1348753,
// "first_name":"Ivan",
// "second_name":"I",
// "display_name":null,
// "login":"ivanivanov1456",
// "avatar":null,
// "email":"ivanivanov1456@yandex.ru",
// "phone":"+7909456746578"
// }"

export interface IState {
    user?: IUser;
}
