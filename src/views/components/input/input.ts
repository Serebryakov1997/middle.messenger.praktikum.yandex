import './input.css';
import { Block } from '../../../core';
import { inputTmpl } from './input.tmpl';

interface IInputBaseProps {
  [key: string]: string | undefined | {};
  styles?: {
    inputClass: string;
  },
  events?: {
    blur: (e: Event) => void;
  }
}

export class InputBase extends Block {

  constructor(props: IInputBaseProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(inputTmpl, this.props);
  }
}
