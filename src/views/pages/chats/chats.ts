import './chats.css';
import { Block } from '../../../utils';
import { chatsTmpl } from './chats.tmpl';
import { mockChatsJSON } from './mockChats';
import { Chat } from '../../components';
import { creationChatList } from '../../../utils/creationChatList';


export class Chats extends Block {

    _formData: FormData;

    constructor() {
        super('form', {
            styles: {
                chatsFormClass: 'chats-form'
            },
            chatsForm: 'chats-form-id'
        });

        this._formData = new FormData();
    }

    protected init(): void {
        // Object.keys(mockChatsJSON).forEach(key => {
        //     this.children.chat = new Chat({
        //         styles: {
        //             chatClass: 'chat',
        //             mockImgClass: 'mock-img',
        //             chatNameClass: 'name'
        //         },
        //         chatName: mockChatsJSON[Number(key)].chatName
        //     });
        // })

        const chatsList = creationChatList(mockChatsJSON);
        this.children.chatsList = Array.from(chatsList) as Block[];
        console.log('this.children.chatsList: ', this.children.chatsList);
    }

    render(): DocumentFragment {
        return this.compile(chatsTmpl, this.props);
    }
}
