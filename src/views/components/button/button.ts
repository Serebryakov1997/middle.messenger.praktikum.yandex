import './button.css';
import { Block } from '../../../utils';
import { buttonTmpl } from './button.tmpl';


interface ButtonProps {
  [key: string]: ({ [name: string]: string } | string | {})
  buttonName: string,
  styles: {
    buttonClass: string;
  }
  events: {
    submit: (e: Event) => void;
  }
}

export class Button extends Block {
  constructor(tagName: string, props: ButtonProps) {
    super(tagName, props);
  }

  render(): DocumentFragment {
    return this.compile(buttonTmpl, this.props);
  }
}
