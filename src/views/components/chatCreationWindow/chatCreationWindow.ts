import './chatCreationWindow.css';
import { Block } from '../../../core';
import { Label } from '../label';
import { chatCreationWindowTmpl } from './chatCreationWindow.tmpl';
import { InputBase } from '../input';
import { ButtonBase } from '../button';
import { ChatController } from '../../../controllers/chat-controller';
import { clickValidation, getChatId, inputValidation } from '../../../utils';
import { emptyValidator } from '../../../models/validators';
import { ValidError } from '../validError';
import { UserController } from '../../../controllers/user-controller';


export interface IChatCreationWindow {
    [key: string]: string | undefined;
    windowTitle: string;
    labelName: string;
    buttonName: string;
    buttonClass: string;
    windowTitleClass: string;
    addUserWindowClass: string;
    chatCreationTextClass: string;
    buttonNameClass?: string;
    otherClass?: string;
}

export class ChatCreationWindow extends Block {

    _formData: FormData;
    labelName: string;
    buttonName: string;
    buttonClass: string;
    buttonNameClass: string;
    constructor(props: IChatCreationWindow) {
        super({
            styles: {
                chatCreationWindowClass: 'chat-creation-window' + props.addUserWindowClass,
                chatCreationTextClass: props.chatCreationTextClass,
                otherClass: props.otherClass
            },
            chatCreationWindowId: 'chat-creation-window-id',
            chatCreationText: props.windowTitle
        });
        this._formData = new FormData();
        (<Block>this.children.chatCreationLabel).setProps({
            labelName: props.labelName
        });
        (<Block>this.children.chatCreationButton).setProps({
            styles: {
                buttonClass: props.buttonClass,
                buttonNameClass: props.buttonNameClass
            },
            buttonName: props.buttonName
        });
        this.labelName = props.labelName;
        this.buttonName = props.buttonName;
        this.buttonClass = props.buttonClass;
        this.buttonNameClass = <string>props.buttonNameClass;
    }

    protected init() {
        this.children = {
            closeButton: new ButtonBase({
                styles: {
                    buttonClass: 'close-button',
                    buttonNameClass: 'button-name'
                },
                buttonName: 'x',
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        this.hide();
                    }
                }
            }),
            chatCreationLabel: new Label({
                styles: {
                    labelClass: 'chat-creation-label'
                },
                name: 'chat_title',
                labelName: this.labelName
            }),
            chatCreationInput: new InputBase({
                styles: {
                    inputClass: 'chat-creation-input'
                },
                inputType: 'text',
                events: {
                    blur: (e: Event) => {
                        const inputValue = (<HTMLInputElement>e.target).value;
                        this._formData.set('chat_title', inputValue);

                        inputValidation(e, emptyValidator,
                            {
                                validError: <Block>this.children.validErrorChatName,
                                input: <Block>this.children.chatCreationInput,
                                button: <Block>this.children.chatCreationButton
                            });
                    }
                }
            }),
            validErrorChatName: new ValidError({
                styles: {
                    validErrClass: 'valid-err',
                    validErrProfileClass: 'valid-err-chat-window'
                },
                validErrorId: 'error'
            }),
            chatCreationButton: new ButtonBase({
                styles: {
                    buttonClass: this.buttonClass,
                    buttonNameClass: this.buttonNameClass
                },
                buttonName: this.buttonName,
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        this.buttonName === 'Создать'
                            ? this.createChat(e, this._formData)
                            : this.addUser(e, this._formData);
                    }
                }
            })
        }
    }

    createChat(event: Event, formData: FormData) {
        let chat_title = formData.get('chat_title') as string;
        const isValid = clickValidation(
            {
                chat_title
            },
            {
                chat_title: emptyValidator
            },
            {
                chat_title: {
                    validError: <Block>this.children.validErrorChatName,
                    input: <Block>this.children.chatCreationInput,
                    button: <Block>this.children.chatCreationButton
                },
            },
            event
        );
        if (isValid) {
            ChatController.createChat(
                { title: chat_title }
            );
            this.setProps({
                display: 'none'
            });
        }
    }

    async addUser(event: Event, formData: FormData) {
        const login = formData.get('chat_title') as string;
        const isValid = clickValidation(
            {
                login
            },
            {
                login: emptyValidator
            },
            {
                login: {
                    validError: <Block>this.children.validErrorChatName,
                    input: <Block>this.children.chatCreationInput,
                    button: <Block>this.children.chatCreationButton
                },
            },
            event
        );

        if (isValid) {
            const findUsers = await UserController.searchUserByLogin({ login });
            const chatId = getChatId();
            ChatController.addUsersToChat({
                users: [findUsers[0].id],
                chatId,
            }, findUsers[0].first_name);
            const chatCreationWindow = document.getElementById('chat-creation-window-id');
            chatCreationWindow!.style.display = 'none';
        }
    }

    async deleteUser(event: Event, formData: FormData) {
        const login = <string>formData.get('chat_title');
        const isValid = clickValidation(
            { login },
            { login: emptyValidator },
            {
                login: {
                    validError: <Block>this.children.validErrorChatName,
                    input: <Block>this.children.chatCreationInput,
                    button: <Block>this.children.chatCreationButton
                }
            },
            event
        );

        if (isValid) {
            const findUsers = await UserController.searchUserByLogin({ login });
            const chatId = getChatId();
            ChatController.deleteUserFromChat({
                users: [findUsers[0].id],
                chatId
            }, findUsers[0].first_name);
            const chatCreationWindow = document.getElementById('chat-creation-window-id');
            chatCreationWindow!.style
        }
    }

    render(): DocumentFragment {
        return this.compile(chatCreationWindowTmpl, this.props);
    }
}
