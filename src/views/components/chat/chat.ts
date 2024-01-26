import './chat.css';
import { Block } from '../../../core';
import { chatTmpl } from './chat.tmpl';

export interface ChatProps {
  [key: string]: string | {} | undefined | number;
  styles: {
    chatClass: string;
    mockImgClass: string;
    chatNameClass: string;
    lastPartMsgClass: string;
    numberOfUnreadMsgsClass?: string;
    timeOfLastMsgClass: string;
  };
  title: string;
  avatar?: string;
  content?: string;
  unread_count?: string;
  time: string;
  events: {
    click: (e: Event) => void;
  }
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(chatTmpl, this.props);
  }
}
