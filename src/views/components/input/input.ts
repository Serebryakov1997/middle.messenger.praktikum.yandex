import './input.css';
import { Block } from '../../../utils';
import { inputTmpl } from './input.tmpl';

interface InputProps {
  [key: string]: string | {} | undefined;
  name: string;
  placeholder?: string;
  styles?: {
    // inputClass: string;
    inputProfileClass: string;
  };
  validErrorId: string;
  inputValue?: string;
  events: {
    blur: (e: Event) => void;
  }
}

export class Input extends Block {
  constructor(tagName: string = 'input', props: InputProps) {
    super(tagName, props);
  }

  render(): DocumentFragment {
    return this.compile(inputTmpl, this.props);
  }
}
