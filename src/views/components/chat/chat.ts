import './chat.css';
import { Block } from '../../../utils';
import { chatTmpl } from './chat.tmpl';


export interface ChatProps {
  [key: string]: string | {} | undefined;
  styles: {
    chatClass: string;
    mockImgClass: string;
    chatNameClass: string;
    lastPartMsgClass: string;
    numberOfUnreadMsgsClass?: string;
    timeOfLastMsgClass: string;
  };
  chatName: string;
  lastPartMsg: string;
  numberOfUnreadMsgs?: string;
  timeOfLastMsg: string;

  events: {
    click: (e: Event) => void;
  }
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super('div', props);
  }

  // protected init(): void {
  //   const { chatName } = this.props;
  //   // console.log('chatName: ', chatName);
  //   this.children.chatLabel = new Label({
  //     name: 'chat_name',
  //     labelName: chatName as string,
  //     styles: {
  //       labelClass: 'chat-label'
  //     }
  //   })
  // }

  render(): DocumentFragment {
    return this.compile(chatTmpl, this.props);
  }
}
