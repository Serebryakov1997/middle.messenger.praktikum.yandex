import './error.css';
import { errorTmpl } from './error.tmpl';
import { UnderButtonLink } from '../../components';
import { Block, router } from '../../../core';

export class PageError extends Block {
  constructor(codeError: string, codeErrorText: string) {
    super({
      styles: {
        errorFormClass: 'page-error',
        payloadClass: 'error-payload',
        codeErrorClass: 'code-error',
        codeErrorTextClass: 'code-error-text',
      },
      codeError,
      codeErrorText,
    });
  }

  protected init(): void {
    this.children.linkToChats = new UnderButtonLink({
      styles: {
        underButtonClass: 'link-to-chats'
      },
      underButtonText: 'Назад к чатам',
      events: {
        click: () => {
          router.go('/messenger');
        }
      }
    });
  }

  render(): DocumentFragment {
    return this.compile(errorTmpl, this.props);
  }
}
