import './chat.css';
import { Block } from '../../../core';
import { chatTmpl } from './chat.tmpl';
import { IState } from '../../../models/interfaces/auth';
import { withStore } from '../../../core/Store';
import { ChatController } from '../../../controllers/chat-controller';

export interface ChatProps {
  [key: string]: string | {} | undefined | number;
  // styles: {
  //   chatClass: string;
  //   mockImgClass: string;
  //   chatNameClass: string;
  //   lastPartMsgClass: string;
  //   numberOfUnreadMsgsClass?: string;
  //   timeOfLastMsgClass: string;
  // };
  numericChat?: number;
  chatName: string;
  lastPartMsg: string;
  numberOfUnreadMsgs?: string;
  timeOfLastMsg: string;
  // chats?: Array<object>;
  events: {
    click: (e: Event) => void;
  }
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super({
      styles: {
        chatClass: 'chat',
        mockImgClass: 'mock-img',
        chatNameClass: 'name',
        lastPartMsgClass: 'last-part-msg',
        timeOfLastMsgClass: 'time-of-last-msg',
      },
      ...props
    });
  }


  render(): DocumentFragment {
    const chats2 = JSON.parse(JSON.stringify(this.props)).chats;
    let styles = {
      chatClass: 'chat',
      mockImgClass: 'mock-img',
      chatNameClass: 'name',
      lastPartMsgClass: 'last-part-msg',
      timeOfLastMsgClass: 'time-of-last-msg',
      numberOfUnreadMsgsClass: ''
    }
    if (chats2) {
      if (chats2[0].unread_count !== 0) {
        styles.numberOfUnreadMsgsClass = 'number-of-unread-msgs';
      }
    }
    const chats = chats2 === undefined ? [{ title: '' }]
      :
      [...chats2];
    // const chats = [
    //   {
    //     title: 'hello',
    //     styles: { chatClass: 'chat' }
    //   },
    //   {
    //     title: 'hi',
    //     styles: { chatClass: 'chat' }
    //   }]
    console.log('chats: ', chats);
    return this.compile(chatTmpl, { chats });
  }
}


const mapStateToProps = (state: IState) => (
  {
    // chatName: state.chats?.[0].title,
    // lastPartMsg: state.chats?.[Number(0)].last_message?.content,
    // numberOfUnreadMsgs: state.chats?.[Number(0)].unread_count,
    // timeOfLastMsg: state.chats?.[Number(0)].last_message?.time,
    // chatAreaId: state.chats?.[Number(0)].title,
    chats: state.chats
  });

export const WrappedChat = withStore(mapStateToProps)(Chat);

