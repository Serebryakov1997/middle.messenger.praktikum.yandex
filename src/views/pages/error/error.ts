import { Block, DEV_LINK_ADDRESS } from '../../../utils';
import { Label } from '../../components';
import { errorTmpl } from './error.tmpl';

export class PageError extends Block {

  codeError: string;

  constructor(codeError: string, codeErrorText: string) {
    super('form', {
      styles: {
        erroFormClass: 'page-error',
        payloadClass: 'error-payload',
        codeErrorClass: 'code-error',
        // codeErrorTextClass: 'code-error-text',
        // linkToChatsClass: 'link-to-chats'
      },
      // linkToChats: `${DEV_LINK_ADDRESS}chats`,
      // linkToChatsName: 'Назад к чатам',
      codeError,
      // codeErrorText
    });
    this.codeError = codeError;
  }

  // protected init(): void {
  //   this.children = {
  //     codeError: new Label({
  //       styles: {
  //         labelClass: 'error-code-label'
  //       },
  //       labelName: this.codeError,
  //     }),
  //   };
  // }

  render(): DocumentFragment {
    return this.compile(errorTmpl, this.props);
  }
}
