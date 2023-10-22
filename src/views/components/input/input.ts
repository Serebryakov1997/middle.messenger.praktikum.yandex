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
  validErrorId?: string;
  inputValue?: string;
  inputType: string;
  readonly?: string;
  events?: {
    blur: (e: Event) => void;
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
