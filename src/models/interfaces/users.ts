export interface IProfileData {
    id: number;
}

export interface IChangeProfileData {
    [key: string]: string;
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    email: string,
    phone: string
}

export interface IChangeProfilePasswd {
    [key: string]: string;
    oldPassword: string;
    newPassword: string;
}
