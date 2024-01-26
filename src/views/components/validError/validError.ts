import { Block } from '../../../core';
import './validError.css';
import { validErrorTmpl } from './validError.tmpl';

interface ValidErrorProps {
  [key: string]: string | {} | undefined
  styles: {
    validErrClass: string;
    validErrProfileClass?: string;
  };
  validErrorId: string;
}

export class ValidError extends Block {
  constructor(props: ValidErrorProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(validErrorTmpl, this.props);
  }
}
