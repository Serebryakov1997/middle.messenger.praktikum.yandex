import './input.css';
import { Block } from '../../../utils';
import { inputTmpl } from './input.tmpl';


interface InputProps {
    [key: string]: string | {} | undefined;
    name: string;
    labelName: string;
    placeholder?: string;
    styles: {
        inputClass: string;
    };
    events: {
        blur: (e: Event) => void;
        click: (e: Event) => void;
    }
}

export class Input extends Block {
    constructor(props: InputProps) {
        super('input', props);
    }

    render(): DocumentFragment {
        return this.compile(inputTmpl, this.props);
    }
}
