import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { creationChatList } from '../../../utils';
import { Chat } from '../chat/chat';
import { chatListTmpl } from './chatList.tmpl';

export class ChatListBase extends Block {

    render(): DocumentFragment {
        let chats;
        if (this.props.chats) {
            this.children.chats = creationChatList(<Record<string, Block>[]>this.props.chats);
        }
        return this.compile(chatListTmpl, { ...this.props, chats });
    }
}


const mapStateToProps = (state: IState) => ({
    chats: state.chats,
});


export const ChatList = withStore(mapStateToProps)(ChatListBase);
