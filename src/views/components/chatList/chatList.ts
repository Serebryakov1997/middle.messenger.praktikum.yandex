import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { Chat } from '../chat/chat';
import { chatListTmpl } from './chatList.tmpl';

export class ChatListBase extends Block {

    render(): DocumentFragment {
        // const { chats } = this.props;
        // console.log('chats in ChatListBase: ', chats);
        // console.log('props in ChatListBase: ', this.props)
        // if (chats) {
        //     console.log('chats 0: ', ...(<Record<string, Chat[]>>this.props).chats)
        // }
        const chats = (<Record<string, Chat[]>>this.props).chats;
        return this.compile(chatListTmpl, { ...this.props });
    }
}


const mapStateToProps = (state: IState) => ({
    chats: state.chats,
});


export const ChatList = withStore(mapStateToProps)(ChatListBase);
