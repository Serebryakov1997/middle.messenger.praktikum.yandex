import './button.css';
import { Block } from '../../../utils';
import { buttonTmpl } from './button.tmpl';


interface ButtonProps {
  [key: string]: ({ [name: string]: string } | string | {})
  styles: {
    authButtonClass: string,
  },
  buttonClass: string,
  buttonName: string,
  events: {
    submit: (e: Event) => void;
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
