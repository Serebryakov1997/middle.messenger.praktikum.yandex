import './chat.css';
import { Block } from '../../../core';
import { chatTmpl } from './chat.tmpl';
import { IState } from '../../../models/interfaces/auth';
import { withStore } from '../../../core/Store';

export interface ChatProps {
  [key: string]: string | {} | undefined | number;
  events: {
    click: (e: Event) => void;
  }
}

export class Chat extends Block {

  constructor() {
    super({});
  }

  render(): DocumentFragment {
    console.log('this.props: ', this.props);
    console.log('this.props chat: ', this.props.chats)
    // let chatProps = JSON.parse(JSON.stringify(this.props)).chats;
    let chatProps = this.props.chats;
    return this.compile(chatTmpl, { chatProps });
  }
}


const mapStateToProps = (state: IState) => (
  {
    chats: state.chats
  });

export const WrappedChat = withStore(mapStateToProps)(Chat);

