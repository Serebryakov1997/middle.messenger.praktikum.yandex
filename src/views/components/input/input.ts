import './input.css';
import { Block } from '../../../utils';
import { inputTmpl } from './input.tmpl';
import { Label } from '../label/label';


interface InputProps {
    [key: string]: string | {} | undefined;
    name: string;
    placeholder?: string;
    styles: {
        inputClass: string;
    };
    events: {
        blur: (e: Event) => void;
        focus: (e: Event) => void;
    }
}

export class Input extends Block {
    constructor(props: InputProps) {
        super('input', props);
    }


    protected init(): void {
        this.children.label = new Label({
            name: 'Логин',
            labelName: 'login',
        });
    }

    render(): DocumentFragment {
        return this.compile(inputTmpl, this.props);
    }
}
