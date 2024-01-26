import { Block } from '../../../core';
import './label.css';
import { labelTmpl } from './label.tmpl';

interface LabelInterface {
  [key: string]: string | {} | undefined;
  styles?: {
    labelClass: string;
  }
  name?: string;
  labelName: string;
}

export class Label extends Block {
  constructor(props: LabelInterface) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(labelTmpl, this.props);
  }
}
