import { Block } from '../../../core';
import './underButtonLink.css';
import { underButtonLinkTmpl } from './underButtonLink.tmpl';

interface UnderButtonLinkProps {
  [key: string]: string | {}
  styles: {
    underButtonClass: string;
  };
  underButtonText: string;
  events: {
    click: (e: Event) => void;
  }
}

export class UnderButtonLink extends Block {
  constructor(props: UnderButtonLinkProps) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(underButtonLinkTmpl, this.props);
  }
}
