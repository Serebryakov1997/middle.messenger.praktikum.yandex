import './chat.css';
import { Block } from '../../../utils';
import { chatTmpl } from './chat.tmpl';

interface ChatProps {
    [key: string]: string | {};
    styles: {
        chatClass: string;
        mockImgClass: string;
        chatNameClass: string;
    };
    chatName: string;
}

export class Chat extends Block {
    constructor(props: ChatProps) {
        super('div', props);
    }

    render(): DocumentFragment {
        return this.compile(chatTmpl, this.props);
    }
}
