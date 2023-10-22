import './error.css';
import { Block, DEV_LINK_ADDRESS } from '../../../utils';
import { errorTmpl } from './error.tmpl';

export class PageError extends Block {

  constructor(codeError: string, codeErrorText: string) {
    super('form', {
      styles: {
        errorFormClass: 'page-error',
        payloadClass: 'error-payload',
        codeErrorClass: 'code-error',
        codeErrorTextClass: 'code-error-text',
        linkToChatsClass: 'link-to-chats'
      },
      codeError,
      codeErrorText,
      linkToChats: `${DEV_LINK_ADDRESS}chats`,
      linkToChatsName: `Назад к чатам`
    })
  }


  render(): DocumentFragment {
    return this.compile(errorTmpl, this.props);
  }
}
