import { Block } from '../../../core';
import './avatarLoader.css';
import { avatarLoaderTmpl } from './avatarLoader.tmpl';

interface AvatarLoaderProps {
  [key: string]: {};
  click: (e: Event) => void;
}

export class AvatarLoader extends Block {
  constructor(props: AvatarLoaderProps) {
    super({
      avatarLoaderId: 'avatarLoaderId',
      avatarLoaderClass: 'avatar-loader',
      avatarId: 'avatar',
      avatarInputType: 'file',
      avatarInputName: 'avatar',
      avatarInputAccept: 'image/*',
      ...props
    });
  }

  render(): DocumentFragment {
    return this.compile(avatarLoaderTmpl, this.props);
  }
}
