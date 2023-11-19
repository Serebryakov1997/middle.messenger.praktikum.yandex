import { Block } from '../../../core';
import './avatarLoader.css';
import { avatarLoaderTmpl } from './avatarLoader.tmpl';

interface AvatarLoaderProps {
  [key: string]: string | {};
  styles: {
    avatarLoaderClass: string;
    dashedBorderClass: string;
    textClass: string;
    textOrClass: string;
  }
  text1Name: string;
  textOrName: string;
}

export class AvatarLoader extends Block {
  constructor(props: AvatarLoaderProps) {
    super('div', props);
  }

  render(): DocumentFragment {
    return this.compile(avatarLoaderTmpl, this.props);
  }
}
