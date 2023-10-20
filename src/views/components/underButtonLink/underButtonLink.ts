import './underButtonLink.css';
import { Block } from '../../../utils';
import { underButtonLinkTmpl } from './underButtonLink.tmpl';

interface UnderButtonLinkProps {
  [key: string]: string | {}
  styles: {
    underButtonClass: string;
  };
  link: string;
  underButtonText: string;
  // events: {
  //     click: (e: Event) => void;
  // }
}

export class UnderButtonLink extends Block {
  constructor(tagName: string, props: UnderButtonLinkProps) {
    super(tagName, props);
  }

  render(): DocumentFragment {
    return this.compile(underButtonLinkTmpl, this.props);
  }
}
