import './button.css';
import { Block } from '../../../utils';
import { buttonTmpl } from './button.tmpl';

interface ButtonProps {
  [key: string]: ({ [name: string]: string } | string | {})
  buttonName: string,
  styles: {
    buttonClass: string;
  },
  events: {
    click: (e: Event) => void;
  }
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  render(): DocumentFragment {
    return this.compile(buttonTmpl, this.props);
  }
}
