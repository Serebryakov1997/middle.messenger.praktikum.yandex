import './chatDeleteWindow.css';
import { Block } from '../../../core';
import { chatDeleteWindowTmpl } from './chatDeleteWindow.tmpl';
import { ButtonBase } from '../button';
import { ChatController } from '../../../controllers/chat-controller';
import { getChatId } from '../../../utils';

export class ChatDeleteWindow extends Block {
    constructor() {
        super({
            styles: {
                chatDeleteWindowClass: 'chat-delete-window',
                chatDeleteTextClass: 'delete-text'
            },
            chatDeleteText: 'Вы уверены, что хотите удалить чат с',
            chatDeleteWindowId: 'chat-delete-window-id'
        })
    }

    protected init(): void {
        this.children = {
            yesButton: new ButtonBase({
                styles: {
                    buttonClass: 'button-del-yes-chat',
                    buttonNameClass: 'button-name'
                },
                buttonName: 'Да',
                events: {
                    click: () => {
                        const chatId = getChatId();
                        ChatController.deleteChat({ chatId: Number(chatId) })
                        const chatDelWindow = document.getElementById('chat-delete-window-id');
                        chatDelWindow!.style.display = 'none';
                    }
                }
            }),
            noButton: new ButtonBase({
                styles: {
                    buttonClass: 'button-del-no-chat',
                    buttonNameClass: 'button-name'
                },
                buttonName: 'Нет',
                events: {
                    click: () => {
                        const chatDelWindow = document.getElementById('chat-delete-window-id');
                        chatDelWindow!.style.display = 'none';
                    }
                }
            })
        }
    }

    render(): DocumentFragment {
        return this.compile(chatDeleteWindowTmpl, this.props);
    }
}
