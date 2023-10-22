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


  render(): DocumentFragment {
    return this.compile(chatTmpl, this.props);
  }
}
