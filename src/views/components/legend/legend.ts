import './legend.css';
import { Block } from '../../../core';
import { legendTmpl } from './legend.tmpl';

export class LegendText extends Block {
    constructor() {
        super({
            styles: {
                selectChatLegendClass: 'select-chat-legend'
            },
            selectChatLegendId: 'select-chat-legend-id',
            selectChatLegend: 'Выберите чат, чтобы отправить сообщение',
        });
    }

    render(): DocumentFragment {
        return this.compile(legendTmpl, this.props);
    }
}
