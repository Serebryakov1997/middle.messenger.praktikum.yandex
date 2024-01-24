import './chatCreationWindow.css';
import { Block } from '../../../core';
import { Label } from '../label';
import { chatCreationWindowTmpl } from './chatCreationWindow.tmpl';
import { InputBase } from '../input';
import { ButtonBase } from '../button';
import { ChatController } from '../../../controllers/chat-controller';


export interface IChatCreationWindow {
    [key: string]: string;
    chatCreationText: string,
}

export class ChatCreationWindow extends Block {

    _formData: FormData;
    labelName: string;
    buttonName: string;
    constructor(
        windowTitle: string,
        labelName: string,
        buttonName: string,
        windowTitleClass: string = '',
        addUserWindowClass: string = '') {
        super({
            styles: {
                chatCreationWindowClass: 'chat-creation-window' + addUserWindowClass,
                chatCreationTextClass: windowTitleClass
            },
            chatCreationWindowId: 'chat-creation-window-id',
            chatCreationText: windowTitle
        });
        this._formData = new FormData();
        (<Block>this.children.chatCreationLabel).setProps({
            labelName: labelName
        });
        (<Block>this.children.chatCreationButton).setProps({
            buttonName: buttonName
        });
        this.labelName = labelName;
        this.buttonName = buttonName;
    }

    protected init() {
        this.children = {
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
                events: {
                    blur: (e: Event) => {
                        this._formData.set('chat_title', (<HTMLInputElement>e.target).value);
                    }
                }
            }),
            chatCreationButton: new ButtonBase({
                styles: {
                    buttonClass: 'button-creation-chat',
                    buttonNameClass: 'button-name'
                },
                buttonName: this.buttonName,
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        console.log('buttonName in click chatCreationButton: ',
                            this.buttonName);
                        this.buttonName === 'Создать'
                            ? this.createChat(this._formData)
                            : this.addUser();
                        // const title = this._formData.get('chat_title') as string;
                        // console.log('title: ', title);
                        // ChatController.createChat(
                        //     { title }
                        // );
                        // this.setProps({
                        //     display: 'none'
                        // });
                    }
                }
            })
        }
    }

    createChat(formData: FormData) {
        const title = formData.get('chat_title') as string;
        console.log('title: ', title);
        ChatController.createChat(
            { title }
        );
        this.setProps({
            display: 'none'
        });
    }

    addUser() {

    }

    render(): DocumentFragment {
        return this.compile(chatCreationWindowTmpl, this.props);
    }
}
