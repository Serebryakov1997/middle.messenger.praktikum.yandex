import './underButtonLink.css';
import { Block } from '../../../utils';
import { underButtonLinkTmpl } from './underButtonLink.tmpl';


interface UnderButtonLinkProps {
    [key: string]: string | {}
    styles: {
        underButtonClass: string;
    };
    registerLink: string;
    underButtonText: string;
    events: {
        click: (e: Event) => void;
    }
}

export class UnderButtonLink extends Block {
    constructor(props: UnderButtonLinkProps) {
        super('a', props);
    }

    render(): DocumentFragment {
        return this.compile(underButtonLinkTmpl, this.props);
    }
}
