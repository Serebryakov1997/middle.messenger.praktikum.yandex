import './button.css';
import { Block } from '../../../core';
import { buttonTmpl } from './button.tmpl';

// interface ButtonProps {
//   [key: string]: ({ [name: string]: string } | string | {}) | undefined
//   buttonName?: string,
//   styles: {
//     buttonClass: string;
//   },
//   events?: {
//     click: (e: Event) => void;
//   }
// }

export class ButtonBase extends Block {
  // constructor(props: ButtonProps) {
  //   super(props);
  // }

  render(): DocumentFragment {
    return this.compile(buttonTmpl, this.props);
  }
}
