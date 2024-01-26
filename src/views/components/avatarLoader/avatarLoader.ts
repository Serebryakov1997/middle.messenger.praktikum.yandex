import { Block } from '../../../core';
import './avatarLoader.css';
import { avatarLoaderTmpl } from './avatarLoader.tmpl';

interface AvatarLoaderProps {
  [key: string]: {};
  events: {
    submit: (e: Event) => void;
  }
}

export class AvatarLoader extends Block {
  constructor(props: AvatarLoaderProps) {
    super({
      styles: {
        avatarLoaderClass: 'avatar-loader',
        avatarInputClass: 'avatar-input-class',
        inputSubmitClass: 'input-submit-class',
      },
      avatarLoaderId: 'avatarLoaderId',
      avatarId: 'avatar',
      avatarInputType: 'file',
      avatarInputName: 'avatar',
      avatarInputAccept: 'image/*',
      inputSubmitType: 'submit',
      ...props,
    });
  }

  render(): DocumentFragment {
    return this.compile(avatarLoaderTmpl, this.props);
  }
}
