import './chatCreationWindow.css';
import { Block } from '../../../core';
import { Label } from '../label';
import { chatCreationWindowTmpl } from './chatCreationWindow.tmpl';
import { InputBase } from '../input';
import { ButtonBase } from '../button';
import { ChatController } from '../../../controllers/chat-controller';


export class ChatCreationWindow extends Block {

    _formData: FormData;
    constructor() {
        super({
            styles: {
                chatCreationWindowClass: 'chat-creation-window',
                chatCreationTextClass: 'chat-creation-text'
            },
            chatCreationWindowId: 'chat-creation-window-id',
            chatCreationText: 'Создать чат'
        });
        this._formData = new FormData();
    }

    protected init(): void {
        this.children = {
            chatCreationLabel: new Label({
                styles: {
                    labelClass: 'chat-creation-label'
                },
                name: 'chat_title',
                labelName: 'Имя чата'
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
                buttonName: 'Создать',
                events: {
                    click: (e: Event) => {
                        e.preventDefault();
                        const title = this._formData.get('chat_title') as string;
                        console.log('title: ', title);
                        ChatController.createChat(
                            { title }
                        );
                        this.setProps({
                            display: 'none'
                        });
                    }
                }
            })
        }
    }

    render(): DocumentFragment {
        return this.compile(chatCreationWindowTmpl, this.props);
    }
}
