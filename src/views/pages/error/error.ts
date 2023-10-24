import './error.css';
import { Block, Router } from '../../../utils';
import { errorTmpl } from './error.tmpl';
import { UnderButtonLink } from '../../components';

export class PageError extends Block {
  constructor(codeError: string, codeErrorText: string) {
    super('form', {
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
    this.children.linkToChats = new UnderButtonLink('a', {
      styles: {
        underButtonClass: 'link-to-chats'
      },
      underButtonText: 'Назад к чатам',
      events: {
        click: () => {
          const router = new Router();
          router.go('/messenger');
        }
      }
    });
  }

  render(): DocumentFragment {
    return this.compile(errorTmpl, this.props);
  }
}
