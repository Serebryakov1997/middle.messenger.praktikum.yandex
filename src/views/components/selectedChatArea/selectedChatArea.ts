import './selectedChatArea.css';
import { Block } from '../../../utils';
import { selectedChatAreaTmpl } from './selectedChatArea.tmpl';


interface SelectedChatAreaProps {
    [key: string]: string | {};
    styles: {
        selectedChatNameClass: string;
        selectedChatLastTimeClass: string;
        selectedChatInputClass: string;
        selectedChatMsgButtonClass: string;
    };
    selectedChatName: string;
    selectedChatLastTime: string;
    selectedChatInputPlchlder: string;
    inputName: string;
}


export class SelectedChatArea extends Block {
    constructor(tagName: string, props: SelectedChatAreaProps) {
        super(tagName, props);
    }

    render(): DocumentFragment {
        return this.compile(selectedChatAreaTmpl, this.props);
    }
}
