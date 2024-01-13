import './chatCreationWindow.css';
import { Block } from '../../../core';
import { Label } from '../label';
import { chatCreationWindowTmpl } from './chatCreationWindow.tmpl';
import { InputBase } from '../input';
import { ButtonBase } from '../button';


export class ChatCreationWindow extends Block {
    constructor() {
        super({
            styles: {
                chatCreationWindowClass: 'chat-creation-window',
                chatCreationTextClass: 'chat-creation-text'
            },
            chatCreationWindowId: 'chat-creation-window-id',
            chatCreationText: 'Создать чат'
        });
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
                }
            }),
            chatCreationButton: new ButtonBase({
                styles: {
                    buttonClass: 'button-creation-chat',
                    buttonNameClass: 'button-name'
                },
                buttonName: 'Создать'
            })
        }
    }

    render(): DocumentFragment {
        return this.compile(chatCreationWindowTmpl, this.props);
    }
}
