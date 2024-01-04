import { AuthController } from '../../../controllers/auth-controller';
import { Block } from '../../../core';
import './input.css';
import { inputTmpl } from './input.tmpl';

// interface InputProps {
//   [key: string]: string | {} | undefined;
//   name: string;
//   placeholder?: string;
//   styles?: {
//     inputClass: string;
//   };
//   validErrorId?: string;
//   inputValue?: string;
//   inputType: string;
//   readonly?: string;
//   events?: {
//     blur: (e: Event) => void;
//   }
// }

export class InputBase extends Block {

  protected componentDidMount(oldProps: Record<string, unknown>): void {
    AuthController.fetchUser();
  }

  render(): DocumentFragment {
    return this.compile(inputTmpl, this.props);
  }
}
