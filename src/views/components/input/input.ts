import './input.css';
import { AuthController } from '../../../controllers/auth-controller';
import { Block } from '../../../core';
import { inputTmpl } from './input.tmpl';


export class InputBase extends Block {

  // protected componentDidMount(oldProps: Record<string, unknown>): void {
  //   AuthController.fetchUser();
  // }

  render(): DocumentFragment {
    return this.compile(inputTmpl, this.props);
  }
}
