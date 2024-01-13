import './clickableText.css';
import { Block } from '../../../core';
import { clickableTextTmpl } from './clickableText.tmpl';

interface IClickableTextProps {
    [key: string]: string | undefined | {};
    clickableText: string;
    createChatsClass?: string;
    events: {
        click: (e: Event) => void;
    }
}

export class ClickableText extends Block {
    constructor(props: IClickableTextProps) {
        super({
            styles: {
                clickableTextClass: 'clickable-text',
            },
            ...props
        });
    }

    render(): DocumentFragment {
        return this.compile(clickableTextTmpl, this.props);
    }
}
