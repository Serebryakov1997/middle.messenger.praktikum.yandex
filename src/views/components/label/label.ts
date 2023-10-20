import './label.css';
import { Block } from '../../../utils';
import { labelTmpl } from './label.tmpl';

interface LabelInterface {
  [key: string]: string | {} | undefined;
  styles?: {
    labelClass: string;
  }
  name: string;
  labelName: string;
}

export class Label extends Block {
  constructor(props: LabelInterface) {
    super('label', props);
  }

  render(): DocumentFragment {
    return this.compile(labelTmpl, this.props);
  }
}
