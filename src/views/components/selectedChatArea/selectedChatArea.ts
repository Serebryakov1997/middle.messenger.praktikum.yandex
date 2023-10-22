import './selectedChatArea.css';
import { Block } from '../../../utils';
import { selectedChatAreaTmpl } from './selectedChatArea.tmpl';
import { Label } from '../label';
import { Input } from '../input';

interface SelectedChatAreaProps {
  [key: string]: string | {} | number | undefined;
  styles: {
    selectedChatAreaClass: string;
    chatHeaderClass: string;
    chatNameClass: string;
  };
}

export class SelectedChatArea extends Block {

  chatName: string;
  _formData: FormData;

  constructor(chatName: string, props: SelectedChatAreaProps) {
    super('div', props);
    this.chatName = chatName;

    console.log('chatName: ', this.chatName);
    this._formData = new FormData();
    if (this.chatName) {
      this._formData.set('chat_name', this.chatName);
    }
  }

  protected init(): void {
    console.log('formData: ', this._formData);
    // console.log('chat name: ', this._formData.get('chat_name'));
    this.children = {
      chatLabel: new Label({
        name: 'chat_name',
        labelName: this.chatName ? this._formData.get('chat_name') as string : '',
        styles: {
          labelClass: 'chat-label'
        }
      }),
      msgInput: new Input({
        name: 'chat_name',
        placeholder: 'Сообщение',
        inputType: 'text',
        styles: {
          inputClass: 'chat-input'
        }
      })
    }
  }

  render(): DocumentFragment {
    return this.compile(selectedChatAreaTmpl, this.props);
  }
}
