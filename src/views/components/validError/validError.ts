import './validError.css';
import { Block } from '../../../utils';
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
  constructor(validErrClass: string, props: ValidErrorProps) {
    super(validErrClass, props);
  }

  render(): DocumentFragment {
    return this.compile(validErrorTmpl, this.props);
  }
}
