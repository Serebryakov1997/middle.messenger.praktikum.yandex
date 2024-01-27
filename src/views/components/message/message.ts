import { Block } from '../../../core';
import './message.css';
import { messageTmpl } from './message.tmpl';

interface MessageProps {
  [key: string]: string | {};
  styles: {
    messageClass: string;
    textPositionClass: string;
  },
  chat_id: string;
  message: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(messageTmpl, this.props);
  }
}
