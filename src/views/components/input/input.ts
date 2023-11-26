import { AuthController } from '../../../controllers/auth-controller';
import { Block } from '../../../core';
import { withStore } from '../../../core/Store';
import { IState } from '../../../models/interfaces/auth';
import './input.css';
import { inputTmpl } from './input.tmpl';

interface InputProps {
  [key: string]: string | {} | undefined;
  name: string;
  placeholder?: string;
  styles?: {
    inputClass: string;
  };
  validErrorId?: string;
  inputValue?: string;
  inputType: string;
  readonly?: string;
  events?: {
    blur: (e: Event) => void;
  }
}

export class BaseInput extends Block {
  constructor() {
    super('input', {
      name: 'email',
      styles: {
        inputClass: 'profile-input',
      },
      inputType: 'text',
      // inputValue: mockData.email,
      readonly: 'readonly',
    });
  }

  protected componentDidMount(oldProps: Record<string, unknown>): void {
    AuthController.fetchUser();
  }

  render(): DocumentFragment {
    return this.compile(inputTmpl, this.props);
  }
}

const mapStateToProps = (state: IState) => ({
  inputValue: state.user?.email
});

export const Input = withStore('input', mapStateToProps)(BaseInput);
