import './message.css';
import { Block } from '../../../utils';
import { messageTmpl } from './message.tmpl';

interface MessageProps {
    [key: string]: string | {};
    styles: {
        messageClass: string;
    },
    message: string;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super('p', props);
  }

  render(): DocumentFragment {
    return this.compile(messageTmpl, this.props);
  }
}
