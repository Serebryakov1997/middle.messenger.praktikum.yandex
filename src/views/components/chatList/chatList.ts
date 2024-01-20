import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import { chatListTmpl } from './chatList.tmpl';

export class ChatListBase extends Block {

    render(): DocumentFragment {
        console.log('ChatListBase: ', this.props);
        const chats = [this.props]
        return this.compile(chatListTmpl, { chats });
    }
}


const mapStateToProps = (state: IState) => ({
    chats: state.chats,
});


export const ChatList = withStore(mapStateToProps)(ChatListBase);
